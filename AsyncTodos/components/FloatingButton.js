import React from "react";
import { StyleSheet} from "react-native";
import { Icon, Fab } from "native-base";

export default function FloatingButton({actionOnPress}) {
  return (
    <Fab direction="up" style={StyleSheet.button} position="bottomRight"
     onPress={actionOnPress}>
      <Icon name="ios-add" />
    </Fab>
  );
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:"#5859f2"
    }
})