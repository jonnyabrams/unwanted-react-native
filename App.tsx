import { StyleSheet, Text, View } from 'react-native';

import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import Screen from './src/components/Screen';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

const App = () => {
  return (
    <Screen>
      <ListItem title="Title" subtitle="Subtitle" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App