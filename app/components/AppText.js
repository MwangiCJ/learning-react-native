import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    // ...Platform.select({
    //   ios: {
    //     fontSize: 22,
    //   },
    //   android: {
    //     fontSize: 22,
    //   },
    // }),
  },
});
