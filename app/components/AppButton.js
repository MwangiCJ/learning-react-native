import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function AppButton({ onPress, title, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default AppButton;
