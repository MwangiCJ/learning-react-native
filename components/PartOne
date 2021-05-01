import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  useDimensions,
  useDeviceOrientation
} from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  Dimensions,
  StatusBar as stb
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Pressed");
  //console.log(useDimensions());
  //console.log(useDeviceOrientation());

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text numberOfLines={1} onPress={handlePress}>
        Hi jc, Open up App.js to start working on your app!
      </Text>
      <Image source={require("./assets/favicon.png")} />
      <TouchableHighlight
        onPress={() => console.log("Image tapped")}
        onLongPress={() => console.log("Image lognpressed")}
      >
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            uri: "https://picsum.photos/id/1/200/300",
            width: 200,
            height: 300
          }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      <Button
        title="Click Me"
        onPress={
          () =>
            Alert.alert("My Custom Title", "Button Clicked", [
              { text: "Yes", onPress: () => console.log("Yes Clicked") },
              { text: "No", onPress: () => console.log("No Clicked") }
            ])
          /*Prompt Works only on iOS */
          //Alert.prompt("Title", "Message", text => console.log(text))
        }
        color="orange"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /**It has benefits such as validation */
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? stb.currentHeight : 0, // We had to rename StatusBar from "react-native"; as stb to avoid conflict from { StatusBar } from "expo-status-bar";
    justifyContent: "center",
    alignItems: "center"
  }
});
