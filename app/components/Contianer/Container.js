import React, { PropTypes } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

// Container.propTypes = {
//   children: PropTypes.element,
// };
