import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Fontisto } from "@expo/vector-icons";

import CameraScreen from "../screens/CameraScreen";
import ChatsScreen from "../screens/ChatsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
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
      <TabNav.Screen name="Chats" component={ChatsScreen} />
      <TabNav.Screen name="Status" component={StatusScreen} />
      <TabNav.Screen name="Calls" component={CallsScreen} />
    </TabNav.Navigator>
  );
}

export default TabNavigator;
