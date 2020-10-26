import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Chats from "../data/Chats";
import MessageBox from "../components/MessageBox";

const ChatRoom = (props) => {
  const user = props.route.params.user;
  const { messages } = Chats;

  props.navigation.setOptions({
    headerTitle: () => (
      <View style={styles.leftContainer}>
        <Image style={styles.img} source={{ uri: user.imageUri }} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
    ),
  });

  return (
    <ImageBackground
      style={styles.bgImg}
      source={{
        uri:
          "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png",
      }}
    >
      <FlatList
        style={styles.chatContainer}
        data={messages}
        renderItem={(message) => (
          <MessageBox message={message.item} user={user} />
        )}
      />
    </ImageBackground>
  );
};

export const screenOptions = {
  headerRight: () => (
    <View style={styles.iconsContainer}>
      <FontAwesome
        name="video-camera"
        size={22}
        color={Colors.light.background}
      />
      <FontAwesome name="phone" size={22} color={Colors.light.background} />
      <MaterialCommunityIcons
        name="dots-vertical"
        size={22}
        color={Colors.light.background}
      />
    </View>
  ),
  headerTitleContainerStyle: {
    left: 50,
  },
};

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
    marginRight: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.background,
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bgImg: {
    width: "100%",
    height: "100%",
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ChatRoom;
