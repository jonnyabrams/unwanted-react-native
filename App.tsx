import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import AppPicker from "./src/components/AppPicker";

import AppTextInput from "./src/components/AppTextInput";
import Icon from "./src/components/Icon";
import ListItem from "./src/components/ListItem";
import Screen from "./src/components/Screen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const App = () => {
  const [category, setCategory] = useState<CategoryType>(categories[0]);

  return (
    <Screen>
      <AppPicker
        items={categories}
        icon="apps"
        placeholder="Category"
        selectedItem={category}
        onSelectItem={(item: CategoryType) => setCategory(item)}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
};

export default App;
