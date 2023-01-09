import { StyleSheet, TouchableOpacity } from "react-native";

import { CategoryType } from "../typings";
import AppText from "./Text";

interface IProps {
  item: CategoryType;
  onPress: () => void;
}

const PickerItem = ({ item, onPress }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
