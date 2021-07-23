import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Screen from "./app/screens/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
export default function App() {
  return (
    <Screen>
      <ListItem title="My title" ImageComponent={<Icon name="email" />} />
    </Screen>
  );
}
