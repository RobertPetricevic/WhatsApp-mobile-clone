import React, { useRef } from "react";
import { StyleSheet, View, ImageBackground, FlatList } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Chats from "../../data/Chats";
import MessageBox from "../../components/MessageBox/MessageBox";
import MessageInput from "../../components/MessageInput/MessageInput";

import styles from "./styles";

const ChatRoom = (props) => {
  const user = props.route.params.user;
  const { messages } = Chats;
  const flatlist = useRef(null);

  // props.navigation.setOptions({
  //   headerTitle: () => (
  //     <View style={styles.leftContainer}>
  //       <Image style={styles.img} source={{ uri: user.imageUri }} />
  //       <Text style={styles.name}>{user.name}</Text>
  //     </View>
  //   ),
  // });

  // SLIKA I IME U HEADERU POSLI TO OMOGUCI

  return (
    <ImageBackground
      style={styles.bgImg}
      source={{
        uri:
          "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png",
      }}
    >
      <View style={styles.chatContainer}>
        <FlatList
          ref={flatlist}
          onContentSizeChange={() => flatlist.current.scrollToEnd()}
          data={messages}
          renderItem={(message) => (
            <MessageBox message={message.item} user={user} />
          )}
        />
      </View>
      <MessageInput />
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

export default ChatRoom;
