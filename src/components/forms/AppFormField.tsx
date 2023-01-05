import { StyleSheet } from "react-native";
import { FormikErrors, useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import AppErrorMessage from "./AppErrorMessage";

interface IProps {
  autoCapitalize?: string;
  autoCorrect?: boolean;
  icon?: string;
  keyboardType?: string;
  name: string;
  placeholder?: string;
  textContentType?: string;
  secureTextEntry?: boolean;
}

const AppFormField = ({ name, autoCapitalize = "none", autoCorrect =  false, ...otherProps }: IProps) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        {...otherProps}
      />
      <AppErrorMessage
        // get name property of errors obj & tell TS it's a key of that obj to stop error
        error={errors[name as keyof FormikErrors<unknown>]}
        visible={touched[name as keyof FormikErrors<unknown>]}
      />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
