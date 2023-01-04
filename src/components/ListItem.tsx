import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../constants/colors";
import AppText from "./AppText";

interface IProps {
  title: string;
  subtitle?: string;
  ImageComponent?: JSX.Element;
  image?: ImageSourcePropType;
  onPress?: () => void;
  renderRightActions?:
    | ((
        progressAnimatedValue: any,
        dragAnimatedValue: any,
        swipeable: Swipeable
      ) => React.ReactNode)
    | undefined;
}

const ListItem = ({
  title,
  subtitle,
  image,
  ImageComponent,
  onPress,
  renderRightActions,
}: IProps) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subtitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
