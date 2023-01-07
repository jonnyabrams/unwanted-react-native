import { FormikErrors, FormikTouched } from "formik";
import { StyleSheet } from "react-native";

import AppText from "../Text";

interface IProps {
  error: string | FormikErrors<any> | string[] | FormikErrors<any>[] | undefined;
  visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
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
