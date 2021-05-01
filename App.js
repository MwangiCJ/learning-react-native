import { StatusBar } from "expo-status-bar";
import React from "react";

import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row" /**row-reverse, column, column-reverse */,
        justifyContent:
          "center" /**flex-end, flex-start, space-around, space-even, space-between */,
        alignItems: "center" /**baseline , flex-end, flex-start, stretch, */,
        alignContent: "center", //allignContent only works with wrap
        flexWrap: "wrap"
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300
        }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      ></View>
    </View>
  );
}
