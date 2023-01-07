import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../constants/colors";

interface IProps {
  imageUri?: string;
}

const ImageInput = ({ imageUri }: IProps) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
