import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: "#e4dede",
    borderBottomWidth: 1,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainInfo: {
    marginLeft: 10,
    maxWidth: 200,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  lastmsg: {
    fontSize: 13,
    color: "gray",
  },
  lastseen: {
    fontSize: 12,
    alignSelf: "flex-start",
    color: "gray",
  },
});

export default styles;
