import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

export default function App() {
  // return <WelcomeScreen/>;
  //return <ViewImageScreen />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>Hello, Jc</AppText>
      <MaterialCommunityIcons name="email" size={200} color="gold" />
      <AppButton title="Login" onPress={() => console.log("tapped")} />
    </View>
  );
}
