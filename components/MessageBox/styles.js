import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  msgBox: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginBottom: 5,
    backgroundColor: "white",
    padding: 7,
    borderRadius: 10,
  },
  msgReceiver: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c5",
  },
  msgText: {
    maxWidth: 250,
  },
  msgTime: {
    fontSize: 12,
    alignSelf: "flex-end",
    color: "gray",
    marginLeft: 15,
  },
});

export default styles;
