import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler (enteredText) {
    // this function will get the text automatically thanks to react's `onChangeText`
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
    
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      // we turned enteredGoalText into an object with the text being enteredGoalText and a key that is a randomly generated number to string
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }
  // const handleText [handleText, setHandleText ] = useState('')
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
               {/* onChangeText wants a function for a pointer && not having parenthesis prevents immediate fire of the function* ie: goalInputHandler */}
        <TextInput onChangeText={goalInputHandler}style={styles.textInput} placeholder="Your course goal!" />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        {/* FlatList takes two properties: data and renderItem */}
        <FlatList 
          data={courseGoals}
          renderItem = {(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        
          // FlatList has this keyExtractor property. it takes two props item and index
          keyExtractor={(item, index) => {
            return item.id
          }}
          alwaysBounceVertical={false}
        />
          
     

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
  },
  goalItem: {
    margin: 8,
    backgroundColor: '#5e0acc',
    padding: 4
  },
  goalText: {
    color: 'white'
  }
});