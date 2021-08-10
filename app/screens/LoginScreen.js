import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "./Screen";

function LoginScreen(props) {
  return (
    <Screen style={Styles.container}>
      <Image source={require("../assets/logo-red.png")} style={Styles.logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange(email)}
            />

            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTexEntry={true}
              textContentType="password"
              onChangeText={handleChange(password)}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const Styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
