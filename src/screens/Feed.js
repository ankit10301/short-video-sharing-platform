import React, { useRef, useState } from "react";
import { Button, Dimensions, TouchableHighlight, View, TouchableWithoutFeedback, TouchableOpacity, ToastAndroid, Text, ScrollView } from "react-native";
import { Video, ResizeMode } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { ScrollView } from "react-native-gesture-handler";
import { videoUrlList } from "./DummyData";

const Feed = props => {

	const [videoStatus, setVideoStatus] = useState({});
	const [autoplay, setAutoplay] = useState(false);
	const [currentVideo, setCurrentVideo] = useState(1);
	const [videoUrls, setVideoUrls] = useState(videoUrlList)

	

	const videoRefs = useRef([]);
	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	const handleMomentumScrollEnd = event => {
		// const position = event.contentOffset;
		const index = Math.round(event.nativeEvent.contentOffset.y / windowHeight) + 1;
		if(index !== currentVideo){
			setCurrentVideo(index);
		}
	}

	return (
		<View>
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
									style={{ height: windowHeight, width: windowWidth }}
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
									shouldPlay={currentVideo === videoData.id && videoData.isLoaded}
									//useNativeControls
									resizeMode={ResizeMode.CONTAIN}
									isLooping
									onPlaybackStatusUpdate={status => setVideoStatus(() => status)}
								/>
							</TouchableWithoutFeedback>
							<View style={{ position: 'absolute', height: windowHeight, width: windowWidth }}>
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