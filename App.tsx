import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
