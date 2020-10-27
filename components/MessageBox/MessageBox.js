import React from "react";
import moment from "moment";
import { StyleSheet, Text, View } from "react-native";

import styles from "./styles";

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

export default MessageBox;
