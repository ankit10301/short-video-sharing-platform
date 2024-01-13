import { StyleSheet } from "react-native";
import { WINDOW_WIDTH, SCREEN_HEIGHT_WITHOUT_BOTTTOM_NAVBAR } from "../../constants";

const styles = StyleSheet.create({
	profileContainer: {
		backgroundColor: '#000',
    height: SCREEN_HEIGHT_WITHOUT_BOTTTOM_NAVBAR,
    width: WINDOW_WIDTH,
    padding: 10
	},
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff'
  },
  userDataContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  userData: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userDataText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600'
  },
  displayName: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: '600'
  },
  postContainerScrollView: {
    marginTop: 20
  },
  postContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 1,
    overflow: 'scroll'
  },
  posts: {
    height: 100,
    width: (WINDOW_WIDTH - 20)/3 - 1,
    backgroundColor: 'white'
  }
})

export default styles;