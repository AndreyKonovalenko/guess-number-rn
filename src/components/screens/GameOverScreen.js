import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../BodyText';
import TitleText from '../TitleText';
import Colors from '../../constants/colors'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          source={require('../../../assets/success.png')}
          //source={{uri: "https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg"}}
          resizeMode='cover'/>
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resulText}>Your phone neede{' '}<Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number{' '}<Text style={styles.highlight}>{props.userChoice}</Text>.</BodyText>
      </View>
      <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
