import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppNavigator from "./navigation/RootNavigator";

export default function App() {
  return (
    <>
      <AppNavigator />
    </>
  );
}
