import React, { useState } from "react";
import { View, Text } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import Storage from './StorageService'

export default function TodosApp() {
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState([
    { id: 1, item: "buy eggs" },
    { id: 2, item: "buy milk" },
  ]);

  const showTodos = todos.map((element) => {
    console.log(element.item);
    return (
      <View key={element.id}>
        <Text>{element.item}</Text>
      </View>
    );
  });

  const handleAddTodo = () => {
    // console.log(input);
    setTodo([...todos, { id: Date.now(), item: input }]);
    setInput("");
    Storage.setTodo("TODO",JSON.stringify(todos))
    console.log(Storage.getTodo("TODO"))
  };
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Appbar.Header>
        <Appbar.Content title="Todos" />
      </Appbar.Header>
      <TextInput
        label="Add Todo"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button mode="contained" onPress={handleAddTodo}>
        Add
      </Button>

      <Text>{input}</Text>
      <View>{showTodos}</View>
    </View>
  );
}
