import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

interface IProps {
  children: React.ReactNode;
  style?: any;
}

const Screen = ({ children, style }: IProps) => {
  return (
    <SafeAreaView style={{ ...styles.screen, ...style }}>
      {children}
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
