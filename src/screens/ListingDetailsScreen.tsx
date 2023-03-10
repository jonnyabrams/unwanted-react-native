import { Image, StyleSheet, View } from "react-native";

import AppText from "../components/Text";
import ListItem from "../components/ListItem";
import colors from "../constants/colors";

type Props = {
  route: any;
};

const ListingDetailsScreen = ({ route }: Props) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>£{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/me.jpeg")}
            title="Jonny Abrams"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
