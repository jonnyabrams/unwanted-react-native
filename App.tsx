import { StyleSheet, Text, View } from "react-native";

import Icon from "./src/components/Icon";
import ListItem from "./src/components/ListItem";
import Screen from "./src/components/Screen";
import AccountScreen from "./src/screens/AccountScreen";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import ListingsScreen from "./src/screens/ListingsScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

const App = () => {
  return (
    <Screen>
      <ListingsScreen />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
