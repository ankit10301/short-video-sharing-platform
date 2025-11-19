import { Dimensions, StatusBar, Platform } from "react-native";

export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const SCREEN_WIDTH = Dimensions.get('screen').width;

export const BOTTOM_NAVIGATION_HEIGHT = 50;
const statusBarHeight = Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0;
const windowHeight = (WINDOW_HEIGHT + statusBarHeight) === SCREEN_HEIGHT ? WINDOW_HEIGHT - statusBarHeight : WINDOW_HEIGHT;
export const SCREEN_HEIGHT_WITHOUT_BOTTOM_NAVBAR = windowHeight - BOTTOM_NAVIGATION_HEIGHT;
export const LOCAL_FALLBACK_IMAGE = require('../assets/icon.png');