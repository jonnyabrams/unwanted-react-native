import { FormikErrors } from "formik";
import { Text } from "react-native";

import defaultStyles from "../constants/styles";

interface IProps {
  children:
    | string
    | FormikErrors<any>
    | string[]
    | FormikErrors<any>[]
    | undefined;
  style?: any;
  numberOfLines?: number;
}

const AppText = ({ children, style, numberOfLines }: IProps) => {
  return (
    <Text
      style={{ ...defaultStyles.text, ...style }}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default AppText;
