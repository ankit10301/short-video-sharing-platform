import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Feed from './src/screens/Feed/Feed';
import BottomNavigation from './src/components/BottomNavigation';
import { store } from './src/Redux/Store';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/screens/Profile/Profile';
import Explore from './src/screens/Explore/Explore';
import Create from './src/screens/Create/Create';
import SavePost from './src/screens/SavePost/SavePost';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
        translucent={false}
      />
        <NavigationContainer>
          <Tab.Navigator tabBar={BottomNavigation} initialRouteName='Feed'>
            <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Tab.Screen name='Create' component={Create} options={{ headerShown: false}} />
            <Tab.Screen name='SavePost' component={SavePost} options={{ headerShown: false }} />
            <Tab.Screen name='Explore' component={Explore} options={{ headerShown: false}} />
          </Tab.Navigator>
        </NavigationContainer>
    </Provider>
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
