import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
    marginRight: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.background,
    marginLeft: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bgImg: {
    width: "100%",
    height: "100%",
  },
  chatContainer: {
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default styles;
