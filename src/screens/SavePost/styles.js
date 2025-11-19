import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT_WITHOUT_BOTTOM_NAVBAR, WINDOW_WIDTH } from '../../constants';

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT_WITHOUT_BOTTOM_NAVBAR,
    width: WINDOW_WIDTH,
  },
})

export default styles;