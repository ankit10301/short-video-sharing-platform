import React, { useEffect, useRef, useState } from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity, ToastAndroid, ScrollView, StatusBar } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute, useIsFocused } from "@react-navigation/native";
import { videoUrlList } from "../DummyData";
import styles from "./styles";
import { WINDOW_HEIGHT, SCREEN_HEIGHT, WINDOW_WIDTH, BOTTOM_NAVIGATION_HEIGHT } from "../../constants";

const Feed = props => {

	const [videoStatus, setVideoStatus] = useState({});
	const [autoplay, setAutoplay] = useState(false);
	const [currentVideo, setCurrentVideo] = useState(1);
	const [videoUrls, setVideoUrls] = useState(videoUrlList);
	const [currentPageFlag, setCurrentPageFlag] = useState(false);

	const videoRefs = useRef([]);

	const route = useRoute();
	const isFocused = useIsFocused();

	const backgroundColorPallette = ['blue', 'pink', 'green', 'yellow', 'red'];
	const windowHeight = (WINDOW_HEIGHT + StatusBar.currentHeight) === SCREEN_HEIGHT ? WINDOW_HEIGHT - StatusBar.currentHeight : WINDOW_HEIGHT;
	const FEED_PAGE_HEIGHT = windowHeight - BOTTOM_NAVIGATION_HEIGHT;

	const handleMomentumScrollEnd = event => {
		// const position = event.contentOffset;
		const index = Math.round(event.nativeEvent.contentOffset.y / FEED_PAGE_HEIGHT) + 1;
		if(index !== currentVideo){
			setCurrentVideo(index);
		}
	}

	return (
		<View style={styles.feedContainer}>
			<ScrollView
				pagingEnabled={true}
				onMomentumScrollEnd={handleMomentumScrollEnd}
			>
				{
					videoUrls.map((videoData, index) => (
						<View key={videoData.id}>
							<TouchableWithoutFeedback
								onPress={() => {
									currentVideo === videoData.id ? setCurrentVideo(null) : setCurrentVideo(videoData.id);
								}}
							>
								<Video
									ref={e => videoRefs.current[index] = e}
									style={{ ...styles.feedVideo, backgroundColor:  backgroundColorPallette[index%5]}}
									source={{
										uri: videoData.sources,
									}}
									onLoad={(status) => {
										if(status.isLoaded){
											const tempVideoUrls = [...videoUrls];
											tempVideoUrls[index] = {
												...tempVideoUrls[index],
												isLoaded: true
											}
											setVideoUrls([...tempVideoUrls]);
										}
									}}
									shouldPlay={currentVideo === videoData.id && videoData.isLoaded && isFocused}
									//useNativeControls
									resizeMode={ResizeMode.CONTAIN}
									isLooping
									//usePoster
									onPlaybackStatusUpdate={status => setVideoStatus(() => status)}
								/>
							</TouchableWithoutFeedback>
							<View style={styles.feedVideoIcons}>
								<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: 20 }}>
									<TouchableOpacity onPress={() => ToastAndroid.show('Heart', ToastAndroid.SHORT)}>
										<Icon name="heart-o" size={25} color='white' />
									</TouchableOpacity>
									<TouchableOpacity onPress={() => ToastAndroid.show('Comment', ToastAndroid.SHORT)}>
										<Icon name="commenting-o" size={25} color='white' />
									</TouchableOpacity>
									<TouchableOpacity onPress={() => ToastAndroid.show('Share', ToastAndroid.SHORT)}>
										<Icon name="share" size={25} color='white' />
									</TouchableOpacity>
								</View>
							</View>

						</View>
					))
				}
			</ScrollView>
		</View >
	)
}

export default Feed;