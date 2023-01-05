import { StyleSheet, Text, View } from "react-native";

import AppText from "./AppText";

interface IProps {
  error: string | undefined;
}

const ErrorMessage = ({ error }: IProps) => {
  if (!error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
