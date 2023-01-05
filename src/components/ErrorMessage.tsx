import { StyleSheet, Text, View } from "react-native";

import AppText from "./AppText";

interface IProps {
  error: string | undefined;
  visible: boolean | undefined;
}

const ErrorMessage = ({ error, visible }: IProps) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
