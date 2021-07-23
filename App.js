import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

import Screen from "./app/screens/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <View>
        <Text>{firstName}</Text>
        <TextInput
          onChangeText={(text) => setFirstName(text)}
          placeholder="First Name"
          style={{
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
          }}
        />
      </View>
    </Screen>
  );
}
