import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FloatingButton from "../components/FloatingButton";
import { Icon, Fab } from "native-base";

export default function HomeScreen({ navigation }) {
  const [isDataReady, setIsDataReady] = useState(false);

  const onPressFab = () => {
    console.log("press me");
    return navigation.navigate("AddTask");
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-around" }}>
      <Text>Home Screen</Text>
      <Fab
        direction="up"
        style={StyleSheet.button}
        position="bottomRight"
        onPress={()=>navigation.navigate('AddTask')}
      >
        <Icon name="ios-add" />
      </Fab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  button: {
    backgroundColor: "#5859f2",
  },
});
