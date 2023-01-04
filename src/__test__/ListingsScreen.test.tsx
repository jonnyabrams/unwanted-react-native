import { FlatList, Text } from "react-native";
import renderer from "react-test-renderer";

import ListingsScreen from "../screens/ListingsScreen";

describe("<ListingsScreen />", () => {
  const tree = renderer.create(<ListingsScreen />).toJSON();

  it("has 1 child", () => {
    // @ts-ignore
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  it("renders the Flatlist component", () => {
    const tree = renderer
      .create(
        <FlatList
          data={["Item1", "Item2", "Item3"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
