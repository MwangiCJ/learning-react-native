import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  // return <WelcomeScreen/>;
  return <ViewImageScreen />;
  //return <WelcomeScreen />;
  //return <ListingDetailsScreen />;
  // return (
  //   <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 40 }}>
  //     <Card
  //       title="Red bag for sale"
  //       subTitle="$100"
  //       image={require("./app/assets/bag.jpg")}
  //     />
  //   </View>
  // );
}
