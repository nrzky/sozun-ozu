import React from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Bottom = (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={props.onCopyPress}
				style={styles.touchableOpacity}
			>
				<Ionicons name='ios-copy' size={30} color='white' />
			</TouchableOpacity>
			<TouchableOpacity onPress={props.onShufflePress}
				style={styles.touchableOpacity}
			>
				<Ionicons name='md-shuffle' size={30} color='white' />
			</TouchableOpacity>
			<TouchableOpacity onPress={props.onSharePress}
				style={styles.touchableOpacity}
			>
				<Ionicons name='md-share' size={30} color='white' />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.075,
		flexDirection: 'row',
		backgroundColor: '#16a085',
	},
	touchableOpacity: {
		flex: 0.33,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default Bottom;