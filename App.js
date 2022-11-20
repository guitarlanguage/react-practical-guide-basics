import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [ enteredGoalText, setEnteredGoalText ] = useState('');

  function goalInputHandler (enteredText) {
    // this function will get the text automatically thanks to react's `onChangeText`
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
    
  function addGoalHandler () {
    // connect this function to the button press
    //and we want the value from the goalInputHandler
    console.log(enteredGoalText);
  };
  // const handleText [handleText, setHandleText ] = useState('')
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
               {/* onChangeText wants a function for a pointer && not having parenthesis prevents immediate fire of the function* ie: goalInputHandler */}
        <TextInput onChangeText={goalInputHandler}style={styles.textInput} placeholder="Your course goal!" />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});