import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";

import Icon from "./Icon";

interface IProps {
  item: CategoryType;
  onPress: () => void;
}

const IconPickerItem = ({ item, onPress }: IProps) => {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
};

export default IconPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%"
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  }
});
