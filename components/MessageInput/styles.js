import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  msgInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 59,
    paddingHorizontal: 5,
    paddingBottom: 3,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    width: "85%",
    height: "88%",
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  rightIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "12%",
    height: "88%",
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  textInput: {
    width: "65%",
    paddingVertical: 5,
    fontSize: 15,
  },
});

export default styles;
