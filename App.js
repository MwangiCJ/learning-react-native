import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";

import Screen from "./app/screens/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Email" />
      <AppPicker icon="apps" placeholder="Category" />
    </Screen>
  );
}
