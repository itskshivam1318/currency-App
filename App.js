//import App from './app/index'
// import TodosApp from './TodosApp/index'

// export default TodosApp;

import React, { Component } from "react";
import { Text, View } from "react-native";
import TodosApp from "./TodosApp/TodosApp";
import AsyncApp from "./Async/AsyncApp";
// import HomeScreen from "./AsyncTodos/screens/HomeScreen";
// import NavApp from "./TutNavigation/NavApp";
import HomeScreen from "./TutNavigation/HomeScreen";

export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <HomeScreen /> */}
        <Text>Hello world</Text>
      </View>
    );
  }
}

export default App;
