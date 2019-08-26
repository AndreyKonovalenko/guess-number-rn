import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/components/screens/StartGameScreen';
import GameScreen from './src/components/screens/GameScreen';
import GameOverScreen from './src/components/screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };


  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen userChoice={userNumber} roundsNumber={guessRounds} onRestart={configureNewGameHandler}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title='GUESS A NUMBER APP' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
