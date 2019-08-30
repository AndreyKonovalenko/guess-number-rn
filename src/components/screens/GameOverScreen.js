import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import BodyText from '../BodyText';
import TitleText from '../TitleText';
import Colors from '../../constants/colors';
import MainButton from '../MainButton';

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            fadeDuration={1000}
            style={styles.image}
            source={require('../../../assets/success.png')}
            //source={{uri: "https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg"}}
            resizeMode='cover'
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone neede{' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userChoice}</Text>.
          </BodyText>
        </View>
        <MainButton onUserPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
