import React from "react";
import moment from "moment";
import { StyleSheet, Text, View, Image } from "react-native";

const ChatListBox = ({ chatRoom }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.img}
          source={{ uri: chatRoom.users[1].imageUri }}
        />
        <View style={styles.mainInfo}>
          <Text style={styles.name}>{chatRoom.users[1].name}</Text>
          <Text style={styles.lastmsg} numberOfLines={1}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
      <Text style={styles.lastseen}>
        {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: "#e4dede",
    borderBottomWidth: 1,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainInfo: {
    marginLeft: 10,
    maxWidth: 200,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  lastmsg: {
    fontSize: 13,
    color: "gray",
  },
  lastseen: {
    fontSize: 12,
    alignSelf: "flex-start",
    color: "gray",
  },
});

export default ChatListBox;
