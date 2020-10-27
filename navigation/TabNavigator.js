import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Fontisto } from "@expo/vector-icons";

import CameraScreen from "../screens/tabScreens/CameraScreen";
import ChatsListScreen from "../screens/tabScreens/ChatListScreen/ChatsListScreen";
import StatusScreen from "../screens/tabScreens/StatusScreen";
import CallsScreen from "../screens/tabScreens/CallsScreen";
import Colors from "../constants/Colors";

const TabNav = createMaterialTopTabNavigator();

const TabNavDefOptions = {
  style: {
    backgroundColor: Colors.light.tint,
  },
  activeTintColor: Colors.light.background,
  indicatorStyle: {
    backgroundColor: Colors.light.background,
    height: 3,
  },
  labelStyle: {
    fontWeight: "bold",
  },
  showIcon: true,
};

function TabNavigator() {
  return (
    <TabNav.Navigator tabBarOptions={TabNavDefOptions}>
      <TabNav.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" size={18} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <TabNav.Screen name="Chats" component={ChatsListScreen} />
      <TabNav.Screen name="Status" component={StatusScreen} />
      <TabNav.Screen name="Calls" component={CallsScreen} />
    </TabNav.Navigator>
  );
}

export default TabNavigator;
