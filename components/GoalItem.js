import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
//TouchableHighlight also works
//TouchableNativeFeedback works only on android
//TouchableWithoutFeedback will work with no visual feedback

const GoalItem = (props) => {
  return ( //activeOpacity can change how opate the object is on press
    <TouchableOpacity activeOpacity ={0.8} onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.listItem} >
      {/*Want to set up detailed listener to on touch */}
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
