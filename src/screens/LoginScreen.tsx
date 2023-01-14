import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { useState } from "react";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  SubmitButton,
  FormField,
  Form,
} from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

type LoginInfoType = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const auth = useAuth();

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }: LoginInfoType) => {
    const result: any = await authApi.login(email, password);
    // have to put return so rest of func is not executed
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    auth?.logIn(result.data)
  };

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/u-logo.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error="Invalid email or password" visible={loginFailed} />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Log In" />
      </Form>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
