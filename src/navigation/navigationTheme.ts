import { DefaultTheme } from "@react-navigation/native";

import colors from "../constants/colors";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

export default myTheme;
