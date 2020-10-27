import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ChatListBox from "../../../components/ChatListBox/ChatListBox";
import ChatRooms from "../../../data/ChatRooms";

import styles from "./styles";

const ChatsScreen = (props) => {
  const addNewChat = () => {
    console.log("NEW CHAT");
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={ChatRooms}
        style={{ width: "100%" }}
        renderItem={(room) => (
          <ChatListBox chatRoom={room.item} navigation={props.navigation} />
        )}
      />
      <TouchableWithoutFeedback onPress={addNewChat}>
        <View style={styles.btn}>
          <MaterialIcons name="message" size={24} color="white" />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ChatsScreen;
