import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import CameraScreen from "../screens/CameraScreen";
import ChatsScreen from "../screens/ChatsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";

const TabNav = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
    <TabNav.Navigator>
      <TabNav.Screen name="Camera" component={CameraScreen} />
      <TabNav.Screen name="Chats" component={ChatsScreen} />
      <TabNav.Screen name="Status" component={StatusScreen} />
      <TabNav.Screen name="Calls" component={CallsScreen} />
    </TabNav.Navigator>
  );
}

export default TabNavigator;
