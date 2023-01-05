import { Image, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/u-logo.png")} />
      <AppTextInput
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <AppTextInput
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
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
