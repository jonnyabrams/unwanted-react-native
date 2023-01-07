import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

interface IProps {
  children: React.ReactNode;
  style?: any;
}

const Screen = ({ children, style }: IProps) => {
  return (
    <SafeAreaView style={{ ...styles.screen, ...style }}>
      <View style={{ ...styles.view, ...style }}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
