import React from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import styles from "./styles";

export default function Logo() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        style={styles.containerImage}
        source={require("./images/background.png")}
      >
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("./images/logo.png")}
        />
      </ImageBackground>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
}
