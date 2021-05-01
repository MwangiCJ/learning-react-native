import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hi jc, Open up App.js to start working on your app!
      </Text>
      <Image source={require("./assets/favicon.png")} />
      <TouchableWithoutFeedback>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            uri: "https://picsum.photos/id/1/200/300",
            width: 200,
            height: 300
          }}
        />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
