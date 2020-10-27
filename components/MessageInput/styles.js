import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  msgInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 5,
  },
  rightIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.tint,
    // backgroundColor: "gray",
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  textInput: {
    flex: 1,
    paddingVertical: 3,
    fontSize: 15,
    maxHeight: 100,
  },
  inputIcons: {
    marginHorizontal: 6,
  },
});

export default styles;
