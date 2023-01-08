import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Group screenOptions={{ presentation: "modal" }}>
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

export default FeedNavigator;
