import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import { useEffect } from "react";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../constants/colors";
import AppText from "../components/Text";
import Button from "../components/Button";
import ActivityIndicator from "../components/ActivityIndicator";
import listingsApi from "../api/listings";
import useApi from "../hooks/useApi";

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const ListingsScreen = ({ navigation }: IProps) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

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
