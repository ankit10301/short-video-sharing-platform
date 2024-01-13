import { StyleSheet, StatusBar } from "react-native";
import { WINDOW_HEIGHT, SCREEN_HEIGHT, WINDOW_WIDTH, BOTTOM_NAVIGATION_HEIGHT } from '../../constants';

const windowWidth = WINDOW_WIDTH;
const windowHeight = (WINDOW_HEIGHT + StatusBar.currentHeight) === SCREEN_HEIGHT ? WINDOW_HEIGHT - StatusBar.currentHeight : WINDOW_HEIGHT;
const FEED_PAGE_HEIGHT = windowHeight - BOTTOM_NAVIGATION_HEIGHT;

const styles = StyleSheet.create({
	feedContainer: {
		height: FEED_PAGE_HEIGHT,
		width: windowWidth,
	},
	feedVideo: {
		height: FEED_PAGE_HEIGHT,
		width: windowWidth,
	},
	feedVideoIcons: {
		position: 'absolute',
		height: FEED_PAGE_HEIGHT,
		width: windowWidth
	}
})

export default styles;