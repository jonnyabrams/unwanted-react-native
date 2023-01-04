import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

interface IProps {
  children: React.ReactNode;
}

const Screen = ({ children }: IProps) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
});
