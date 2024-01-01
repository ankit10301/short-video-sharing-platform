import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Feed from './src/screens/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />
      <Feed />
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
});
