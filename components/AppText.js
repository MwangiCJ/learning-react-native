import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    ...Platform.select({
      ios: {
        fontSize: 28,
      },
      android: {
        fontSize: 45,
      },
    }),
  },
});
