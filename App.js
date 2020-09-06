import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
//Use ScrollView when you know info will exceed page but not by much
//Flatlist is better for "infinite" or unknown length of info

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);

 

  const addGoalHandler = goalTitle => {
    console.log(enteredGoal);
    //setCourseGoals([...courseGoals, enteredGoal]);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }, //need unique identifer
    ]); //"gurantees latest state snapshot"
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      {/*Need to use special view to allow moobile screen to scroll */}
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals}>
        renderItem=
        {(itemData) => <GoalItem title={itemData.item.value}></GoalItem>}
        {/*Wrap in view for more styling options */}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
  
});
