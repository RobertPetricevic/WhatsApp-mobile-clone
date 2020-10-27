import React from "react";
import moment from "moment";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";

import styles from "./styles";

const ChatListBox = ({ chatRoom, navigation }) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate("ChatRoom", { user: chatRoom.users[1] });
      }}
    >
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
    </TouchableNativeFeedback>
  );
};

export default ChatListBox;
