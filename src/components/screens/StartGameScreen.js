import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Card from '../Card';
import Colors from '../../constants/colors';
import Input from '../Input';
const StartGameScreen = props => {
  const [enterdValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNubmer, setSelectedNubmer] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const restInputHndler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterdValue);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNubmer(chosenNumber);
    setEnteredValue(''); // this will execute in the next rendering so we can still access to enteredValue
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = <Text> ChosenNumberis : {selectedNubmer}</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enterdValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                color={Colors.secondary}
                onPress={restInputHndler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                color={Colors.secondary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});

export default StartGameScreen;
