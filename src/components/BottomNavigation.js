import { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { WINDOW_WIDTH, BOTTOM_NAVIGATION_HEIGHT } from "../contants";

const BottomNavigation = props => {
	return (
		<View style={styles.container}>
			<Icon style={styles.navButton} name="home" size={25} color='white' />
			<Icon style={styles.navButton} name="search" size={25} color='white' />
			<Icon style={styles.navButton} name="plus" size={25} color='white' />
			<MIcon style={styles.navButton} name="chat-bubble-outline" size={25} color='white' />
			<Icon style={styles.navButton} name="user-o" size={25} color='white' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: BOTTOM_NAVIGATION_HEIGHT,
		width: WINDOW_WIDTH,
	},
	navButton: {
		// flex: 1
	}
})

export default BottomNavigation;