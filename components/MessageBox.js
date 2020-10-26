import React from "react";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";

const MessageBox = (props) => {
  return (
    <View
      style={[
        styles.msgBox,
        props.user.id !== props.message.user.id ? styles.msgReceiver : null,
      ]}
    >
      <Text style={styles.msgText}>{props.message.content}</Text>
      <Text style={styles.msgTime}>
        {moment(props.message.createdAt).format("HH:MM")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  msgBox: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 5,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 10,
  },
  msgReceiver: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c5",
  },
  msgText: {
    maxWidth: 250,
  },
  msgTime: {
    fontSize: 12,
    alignSelf: "flex-end",
    color: "gray",
    marginLeft: 15,
  },
});

export default MessageBox;
