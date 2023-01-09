import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../constants/colors";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ListingsScreen = ({ navigation }: IProps) => {
  const [listings, setListings] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    // inline return setError(true) same as doing { setError(true) --new line-- return;}
    if (!response.ok) return setError(true);

    // set error to false in case it had previously been set to true
    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
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
