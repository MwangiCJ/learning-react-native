import { StatusBar } from "expo-status-bar";
import React from "react";

import { View } from "react-native";

export default function App() {
  return (
    <View
      style={
        {
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row"
        } /**row-reverse, column, column-reverse */
      }
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
    </View>
  );
}
