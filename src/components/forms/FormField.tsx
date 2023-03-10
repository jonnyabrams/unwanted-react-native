import { StyleSheet } from "react-native";
import { FormikErrors, useFormikContext } from "formik";

import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

interface IProps {
  autoCapitalize?: string;
  autoCorrect?: boolean;
  icon?: string;
  keyboardType?: string;
  name: string;
  placeholder?: string;
  textContentType?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  width?: string | number;
}

const FormField = ({
  name,
  width,
  autoCapitalize = "none",
  autoCorrect = false,
  ...otherProps
}: IProps) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text: string | number) => setFieldValue(name, text)}
        // @ts-ignore
        value={values[name]}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        width={width}
        {...otherProps}
      />
      <ErrorMessage
        // get name property of errors obj & tell TS it's a key of that obj to stop error
        error={errors[name as keyof FormikErrors<unknown>]}
        visible={touched[name as keyof FormikErrors<unknown>]}
      />
    </>
  );
};

export default FormField;

const styles = StyleSheet.create({});
