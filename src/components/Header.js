import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Image
				style={styles.headerImage}
				source={require('../images/chat.png')}
			/>
			<Text style={styles.headerText}>Sözün Özü</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		flex: 0.1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#16a085'
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'white'
	},
	headerImage: {
		height: 30,
		width: 30,
	},
});

export default Header;