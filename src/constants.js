import { Dimensions, StatusBar } from "react-native";

export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const BOTTOM_NAVIGATION_HEIGHT = 50;
const windowHeight = (WINDOW_HEIGHT + StatusBar.currentHeight) === SCREEN_HEIGHT ? WINDOW_HEIGHT - StatusBar.currentHeight : WINDOW_HEIGHT;
export const SCREEN_HEIGHT_WITHOUT_BOTTTOM_NAVBAR = windowHeight - BOTTOM_NAVIGATION_HEIGHT;