import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const ChatRoom = (props) => {
  const user = props.route.params.user;

  props.navigation.setOptions({
    headerTitle: () => (
      <View style={styles.leftContainer}>
        <Image style={styles.img} source={{ uri: user.imageUri }} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
    ),
  });

  return (
    <View>
      <Text>ChatRoom</Text>
    </View>
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
});

export default ChatRoom;
