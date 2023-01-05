import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

interface IProps {
  children: React.ReactNode;
  style?: any;
}

const Screen = ({ children, style }: IProps) => {
  return (
    <SafeAreaView style={{ ...styles.screen, ...style }}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  content: {
    padding: 20
  },
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
