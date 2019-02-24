import React from 'react';
import {
	View,
	Text,
	Image,
	StatusBar,
	Clipboard,
	Share,
	StyleSheet
} from 'react-native';
import Header from './src/components/Header';
import Bottom from './src/components/Bottom';
import Sentences from './src/database/Sentences.json';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			randomNumber: null,
		}
	}
	componentWillMount() {
		this.getRandom();
	}
	getRandom() {
		const min = 0;
		const max = Object.keys(Sentences).length;
		const randomNumber = Math.floor(Math.random() * (max - min)) + min;
		this.setState({ randomNumber: randomNumber });
	}
	copySentence() {
		Clipboard.setString(Sentences[this.state.randomNumber].Sentence);
	}
	shareSentence() {
		Share.share({
			message: Sentences[this.state.randomNumber].Sentence,
		});
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				<Header />
				<View style={styles.content}>
					<Image
						style={styles.image}
						source={require('./src/images/chat.png')}
					/>
					<Text style={styles.sentenceText}>{Sentences[this.state.randomNumber].Sentence}</Text>
					<Text style={styles.authorText}>{Sentences[this.state.randomNumber].Author}</Text>
				</View>
				<Bottom
					onCopyPress={() => this.copySentence()}
					onShufflePress={() => this.getRandom()}
					onSharePress={() => this.shareSentence()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 0.825,
		backgroundColor: '#2c3e50'
	},
	image: {
		height: 96,
		width: 96,
		alignSelf: 'center',
		marginTop: 30,
	},
	sentenceText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 20,
		color: 'white'
	},
	authorText: {
		fontSize: 16,
		textAlign: 'center',
		color: 'lightgray'
	}
});