import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      <View style={{padding: 50}}>
        <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
