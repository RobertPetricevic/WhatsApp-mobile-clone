import React, { useState } from "react";
import { View, TextInput } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

import styles from "./styles";

const MessageInput = (props) => {
  const [textInput, setTextInput] = useState("");

  const changeInputHandler = (text) => {
    setTextInput(text);
  };

  const sendMessageHandler = () => {
    console.log(textInput);
    setTextInput("");
  };

  return (
    <View style={styles.msgInput}>
      <View style={styles.inputContainer}>
        <Fontisto name="smiley" size={24} color="gray" />
        <TextInput
          style={styles.textInput}
          placeholder="Type a message"
          value={textInput}
          onChangeText={changeInputHandler}
          multiline
        />
        <Ionicons name="md-attach" size={24} color="gray" />
        {textInput.length === 0 && (
          <Ionicons name="md-camera" size={24} color="gray" />
        )}
      </View>
      <View style={styles.rightIconContainer}>
        <Ionicons
          name={textInput.length === 0 ? "md-mic" : "md-send"}
          size={18}
          color={Colors.light.background}
          onPress={sendMessageHandler}
        />
      </View>
    </View>
  );
};

export default MessageInput;
