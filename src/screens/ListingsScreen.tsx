import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../constants/colors";
import listingsApi from "../api/listings";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ListingsScreen = ({ navigation }: IProps) => {
  const [listings, setListings] = useState<any>([]);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    console.log(response.data)
    setListings(response.data)
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`£${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
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
    backgroundColor: colors.light,
  },
});
