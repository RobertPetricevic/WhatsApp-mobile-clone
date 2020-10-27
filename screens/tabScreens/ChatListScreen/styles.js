import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
    borderRadius: 24,
    backgroundColor: Colors.light.tint,
  },
});

export default styles;
