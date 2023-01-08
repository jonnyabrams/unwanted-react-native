import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/Button";
import colors from "../constants/colors";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const WelcomeScreen = ({ navigation }: IProps) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/u-logo.png")} />
        <Text style={styles.tagline}>
          Ditch your old crap with this snazzy new app!
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Log In"
          color={colors.primary}
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Register"
          color={colors.secondary}
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 15,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
