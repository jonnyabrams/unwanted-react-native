import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../constants/colors";

const listings = [
  {
    id: 1,
    title: "Blue Jacket for Sale",
    price: 79,
    image: require("../assets/blue_jacket.webp"),
  },
  {
    id: 2,
    title: "Red Jacket for Sale",
    price: 72,
    image: require("../assets/red_jacket.jpeg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`£${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
});
