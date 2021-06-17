import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, SafeAreaView } from "react-native";

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
