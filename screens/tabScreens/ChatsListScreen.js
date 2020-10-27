import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ChatListBox from "../../components/ChatListBox/ChatListBox";
import ChatRooms from "../../data/ChatRooms";

const ChatsScreen = (props) => {
  return (
    <FlatList
      data={ChatRooms}
      renderItem={(room) => (
        <ChatListBox chatRoom={room.item} navigation={props.navigation} />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ChatsScreen;
