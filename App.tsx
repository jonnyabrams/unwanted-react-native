import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

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
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthContext from "./src/auth/context";
import { UserType } from "./src/typings";

const App = () => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
