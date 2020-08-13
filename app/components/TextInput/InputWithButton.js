import React, { useState } from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import color from "color";

import styles from "./styles";

export default function InputWithButton({
  onPress,
  buttonText,
  editable = true,
  value,
  setText
}) {
  const underlayColor ='#F0F0F0';

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        editable={editable}
        value={value}
        onChangeText={text=>setText(text)}
        underlineColorAndroid="transparent"
        keyboardType="numeric"
      />
    </View>
  );
}
