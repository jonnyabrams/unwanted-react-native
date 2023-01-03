import { Platform, StyleSheet, Text, View } from "react-native";

interface IProps {
  children: string;
  style?: any;
}

const AppText = ({ children, style }: IProps) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
});
