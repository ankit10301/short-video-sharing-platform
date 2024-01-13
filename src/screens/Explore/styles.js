import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT_WITHOUT_BOTTTOM_NAVBAR, WINDOW_WIDTH } from "../../constants";

const styles = StyleSheet.create({
  exploreContainer: {
    height: SCREEN_HEIGHT_WITHOUT_BOTTTOM_NAVBAR,
    width: WINDOW_WIDTH,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  searchInputContainer: {
    width: WINDOW_WIDTH - 40,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 15
  },
  searchInput: {
    width: '80%',
    paddingLeft: 15,
    color: '#fff'
  },
  recommendationContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    paddingBottom: 40
  },
  categoryContainer: {
    backgroundColor: 'grey',
    borderRadius: 10,
    height: 500,
    width: WINDOW_WIDTH - 40,
    marginTop: 10
  },
  category: {
    margin: 15,
    height: 470,
    borderRadius: 10,
    backgroundColor: '#9897a9'
  },
  categoryTitleContainer: {
    height: 20,
    margin: 10
  },
  categoryTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tilesData: {
    height: (470 - 50) / 2,
    padding: 10,
    width: (WINDOW_WIDTH - 91) / 2,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;