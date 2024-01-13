import { useState } from "react";
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Touchable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { WINDOW_WIDTH, BOTTOM_NAVIGATION_HEIGHT } from "../constants";

const BottomNavigation = props => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => props.navigation.navigate('Feed')}>
				<Icon style={styles.navButton} name="home" size={25} color='white' />
			</TouchableOpacity>
			<Icon style={styles.navButton} name="search" size={25} color='white' />
			<Icon style={styles.navButton} name="plus" size={25} color='white' />
			<MIcon style={styles.navButton} name="chat-bubble-outline" size={25} color='white' />
			<TouchableOpacity
				onPress={() => props.navigation.navigate('Profile')}
			>
				<Icon style={styles.navButton} name="user-o" size={25} color='white' />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: BOTTOM_NAVIGATION_HEIGHT,
		width: WINDOW_WIDTH,
		backgroundColor: '#000'
	},
	navButton: {
		// flex: 1
	}
})

export default BottomNavigation;