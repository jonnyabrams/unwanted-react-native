import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { useState } from "react";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import { MessageType } from "../typings";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/me.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/me.jpeg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/me.jpeg"),
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus non rerum, quasi autem saepe perspiciatis corrupti eaque ipsam fugiat labore ad nostrum dignissimos veniam repellat aut. Aspernatur, eum dolorem.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus non rerum, quasi autem saepe perspiciatis corrupti eaque ipsam fugiat labore ad nostrum dignissimos veniam repellat aut. Aspernatur, eum dolorem",
    image: require("../assets/me.jpeg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: MessageType) => {
    const filteredMessages = messages.filter((m) => m.id !== message.id);
    setMessages(filteredMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log(item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/me.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
