import { useEffect, useState } from "react";
import { Image, Switch, Text, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

import AppPicker from "./src/components/Picker";
import AppTextInput from "./src/components/TextInput";
import Icon from "./src/components/Icon";
import ListItem from "./src/components/ListItem";
import Screen from "./src/components/Screen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import ListingEditScreen from "./src/screens/ListingEditScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Button from "./src/components/Button";
import ImageInput from "./src/components/ImageInput";

const App = () => {
  const [image, setImage] = useState<any>(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  useEffect(() => {
    requestPermission();
  }, []);

  const pickImage = async () => {
    try {
      if (status?.granted) {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
  
        console.log(result);
  
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      } else {
        alert("You need to enable permissions to access library");
      }
    } catch (error) {
      console.log("Error reading an image")
    }
  };

  return (
    <Screen>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <ImageInput imageUri={image} />
      </View>
    </Screen>
  );
};

export default App;
