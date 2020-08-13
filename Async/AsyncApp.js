import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  AsyncStorage,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
import { StatusBar } from "expo-status-bar";

const STORAGE_KEY ='@save_name'
export default function AsyncApp() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");

//   useEffect(() => {
//     retriveData();
//   }, [name]);

  const retriveData = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);
      if (name !== null) {
        setName(name);
      }
    } catch (e) {
      alert("Failed to load Name");
    }
  };

  const save = async (input) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, input);
      alert(`data ${input} saved sucessfully`);
      // setName(name)
    } catch (e) {
      alert("failed to save name");
    }
  };

  const removeEverything = async () => {
    try {
      await AsyncStorage.clear();
      alert("storage cleared");
      setText('')
      setName('')
    } catch (e) {
      alert("failed to clear the async storage");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={false}/>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="enter your name"
        onChangeText={(text) => setText(text)}
      />
      <TouchableOpacity style={styles.button} onPress={()=>save(text)}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={retriveData}>
        <Text style={styles.buttonText}>Show Data</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Hello {name}</Text>
      <TouchableOpacity style={styles.button} onPress={removeEverything}>
        <Text style={styles.buttonText}>Clear Storage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "#00ADCF",
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    margin: 10,
  },
  button: {
    margin: 10,
    padding: 10,
    height:20,
    backgroundColor: "#FF851B",
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
  },
});
