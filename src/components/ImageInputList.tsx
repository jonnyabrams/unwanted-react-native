import { StyleSheet, View } from "react-native";

import ImageInput from "./ImageInput";

interface IProps {
  imageUris: string[];
  onRemoveImage: (uri: string) => void;
  onAddImage: ((uri: string) => void) | null;
}

const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: IProps) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View key={uri} style={styles.image}>
          <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} />
        </View>
      ))}
      <ImageInput onChangeImage={(uri) => onAddImage!(uri!)} />
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
