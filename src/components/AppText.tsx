import { Text } from "react-native";

import defaultStyles from '../constants/styles'

interface IProps {
  children: string;
  style?: any;
}

const AppText = ({ children, style }: IProps) => {
  return <Text style={{...defaultStyles.text, ...style}}>{children}</Text>;
};

export default AppText;

