import React, { useState } from "react";
import { View, TextInput, TouchableWithoutFeedback } from "react-native";

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
    if (textInput.length !== 0) {
      // console.log(textInput);
      setTextInput("");
    }
  };

  return (
    <View style={styles.msgInput}>
      <View style={styles.inputContainer}>
        <Fontisto
          name="smiley"
          size={24}
          color="gray"
          style={styles.inputIcons}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Type a message"
          value={textInput}
          onChangeText={changeInputHandler}
          multiline
        />
        <Ionicons
          name="md-attach"
          size={24}
          color="gray"
          style={styles.inputIcons}
        />
        {textInput.length === 0 && (
          <Ionicons
            name="md-camera"
            size={24}
            color="gray"
            style={styles.inputIcons}
          />
        )}
      </View>
      <TouchableWithoutFeedback onPress={sendMessageHandler}>
        <View style={styles.rightIconContainer}>
          <Ionicons
            name={textInput.length === 0 ? "md-mic" : "md-send"}
            size={25}
            color={Colors.light.background}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MessageInput;
