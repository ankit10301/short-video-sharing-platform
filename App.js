import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Feed from './src/screens/Feed/Feed';
import BottomNavigation from './src/components/BottomNavigation';
import { store } from './src/Redux/Store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
        translucent={false}
      />
      <Provider store={store}>
        <SafeAreaView>
          <Feed style={styles.feed}/>
          <BottomNavigation />
        </SafeAreaView>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  feed: {
  }
});
