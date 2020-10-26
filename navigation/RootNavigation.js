import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TabNavigator from "./TabNavigation";
import Colors from "../constants/Colors";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";

const StackNav = createStackNavigator();

const StackNavDefOptions = {
  headerStyle: {
    backgroundColor: Colors.light.tint,
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
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
