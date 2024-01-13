import { useState } from "react";
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Touchable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { WINDOW_WIDTH, BOTTOM_NAVIGATION_HEIGHT } from "../constants";

const BottomNavigation = props => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => props.navigation.navigate('Feed')}>
				<View style={styles.navButton}>
					<Icon name="home" size={25} color='white' />
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => props.navigation.navigate('Explore')}>
				<View style={styles.navButton}>
					<Icon name="search" size={25} color='white' />
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {}}>
				<View style={styles.navButton}>
					<Icon name="plus" size={25} color='white' />
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => {}}>
				<View style={styles.navButton}>
					<MIcon name="chat-bubble-outline" size={25} color='white' />
				</View>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
				<View style={styles.navButton}>
					<Icon name="user-o" size={25} color='white' />
				</View>
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
		width: WINDOW_WIDTH / 5,
		height: BOTTOM_NAVIGATION_HEIGHT,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default BottomNavigation;