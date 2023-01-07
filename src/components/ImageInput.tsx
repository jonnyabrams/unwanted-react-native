import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../constants/colors";
import { useEffect } from "react";

interface IProps {
  imageUri?: string;
  onChangeImage: (imageUri: string | null) => void;
}

const ImageInput = ({ imageUri, onChangeImage }: IProps) => {
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) pickImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const pickImage = async () => {
    try {
      if (status?.granted) {
        let result = await ImagePicker.launchImageLibraryAsync({
          // only allows images, use ...MediaTypeOptions.All to include videos
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          // between 0 and 1, choosing midway so don't deal with large uploads in server
          quality: 0.5,
        });

        console.log(result);

        if (!result.canceled) {
          onChangeImage(result.assets[0].uri);
        }
      } else {
        alert("You need to enable permissions to access library");
      }
    } catch (error) {
      console.log("Error reading an image");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
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
