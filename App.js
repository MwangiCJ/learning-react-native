import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/screens/Screen";

export default function App() {
  const [firstName, setFirstName] = useState("");

  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
