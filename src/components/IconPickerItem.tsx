import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./Text";

import Icon from "./Icon";
import { CategoryType } from "../typings";

interface IProps {
  item: CategoryType;
  onPress: () => void;
}

const IconPickerItem = ({ item, onPress }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default IconPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
