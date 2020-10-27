import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigator";
import Colors from "../constants/Colors";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";
import ChatRoom, {
  screenOptions as chatRoomOptions,
} from "../screens/ChatRoom/ChatRoom";

const StackNav = createStackNavigator();

const StackNavDefOptions = {
  headerStyle: {
    backgroundColor: Colors.light.tint,
    elevation: 0,
  },
  headerTintColor: Colors.light.background,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={StackNavDefOptions}>
        <StackNav.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerTitle: "WhatsApp",
            headerRight: () => (
              <View style={styles.iconsContainer}>
                <Ionicons
                  name="md-search"
                  size={24}
                  color={Colors.light.background}
                />
                <Ionicons
                  name="md-options"
                  size={24}
                  color={Colors.light.background}
                />
              </View>
            ),
          }}
        />
        <StackNav.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={chatRoomOptions}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
