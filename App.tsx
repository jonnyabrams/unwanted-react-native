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
import ImageInputList from "./src/components/ImageInputList";

const App = () => {
  const [imageUris, setImageUris] = useState<string[]>([]);

  return (
    <Screen>
      <ImageInputList
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        imageUris={imageUris}
      />
    </Screen>
  );
};

export default App;
