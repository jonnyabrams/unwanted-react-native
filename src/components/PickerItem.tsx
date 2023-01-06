import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AppText from "./AppText";

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
