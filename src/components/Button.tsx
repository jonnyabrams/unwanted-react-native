import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../constants/colors";

interface IProps {
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ title, color = colors.primary, onPress }: IProps) => {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
