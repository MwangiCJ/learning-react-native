import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "./Screen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(4).label("Pasword"),
  email: Yup.string().required().email().label("Email"),
});

function LoginScreen(props) {
  return (
    <Screen style={Styles.container}>
      <Image source={require("../assets/logo-red.png")} style={Styles.logo} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTexEntry={true}
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <ErrorMessage error={errors.password} />
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
