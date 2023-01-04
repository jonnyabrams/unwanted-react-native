import { FlatList, Text } from "react-native";
import renderer from "react-test-renderer";

import AccountScreen from "../screens/AccountScreen";

describe("<AccountScreen />", () => {
  const tree = renderer.create(<AccountScreen />).toJSON();

  it("has 3 children", () => {
    // @ts-ignore
    expect(tree.children.length).toBe(3);
  });

  it("has 3 views", () => {
    // @ts-ignore
    expect(tree.children[0].type).toBe("View")
    // @ts-ignore
    expect(tree.children[1].type).toBe("View")
    // @ts-ignore
    expect(tree.children[2].type).toBe("View")
  });

  it("renders correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
