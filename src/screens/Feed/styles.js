import { StyleSheet } from "react-native";
import { WINDOW_WIDTH, SCREEN_HEIGHT_WITHOUT_BOTTOM_NAVBAR } from '../../constants';

const styles = StyleSheet.create({
	feedContainer: {
		height: SCREEN_HEIGHT_WITHOUT_BOTTOM_NAVBAR,
		width: WINDOW_WIDTH,
	},
	feedVideo: {
		height: SCREEN_HEIGHT_WITHOUT_BOTTOM_NAVBAR,
		width: WINDOW_WIDTH,
	},
	feedVideoIcons: {
		position: 'absolute',
		height: SCREEN_HEIGHT_WITHOUT_BOTTOM_NAVBAR,
		width: WINDOW_WIDTH
	}
})

export default styles;