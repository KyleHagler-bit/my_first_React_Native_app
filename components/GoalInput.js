import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    //const goalInputHandler = (enteredText) =>
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal(""); // reset text in input field
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler} //dont add () here
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1, //control how much space it takes up
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    //in order to get buttons to be the same size
    width: "40%",
  },
});

export default GoalInput;
