import { useState } from "react";
import { Image, StyleSheet } from "react-native";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/u-logo.png")} />
      <AppTextInput
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
      />
      <AppTextInput
        icon="lock"
        placeholder="Password"
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <AppButton title="Log In" onPress={() => console.log(email, password)} />
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
