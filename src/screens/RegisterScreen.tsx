import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { useState } from "react";

import Screen from "../components/Screen";
import {
  SubmitButton,
  FormField,
  Form,
  ErrorMessage,
} from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import { RegisterInfoType } from "../typings";
import auth from "../api/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const auth = useAuth();

  const handleSubmit = async (userInfo: RegisterInfoType) => {
    const result = await usersApi.register(userInfo);

    if (!result.ok) {
      if (result.data) {
        setIsError(true);
        // @ts-ignore
        setError(result.data.error);
      } else {
        setIsError(true);
        setError("An unexpected error occurred");
        console.log(result);
      }
      return;
    }

    setIsError(false);

    const { data: authToken } = await authApi.login(
      userInfo.email,
      userInfo.password
    );
    auth?.logIn(authToken as string);
  };

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/u-logo.png")} />

      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={isError} />
        <FormField
          autoCapitalize="words"
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
