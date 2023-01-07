import { FormikErrors } from "formik";
import { StyleSheet } from "react-native";

import AppText from "../Text";

interface IProps {
  error: FormikErrors<string> | undefined;
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
