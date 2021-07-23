import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/screens/Screen";

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </Screen>
  );
}
