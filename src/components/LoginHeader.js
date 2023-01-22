import { StyleSheet, Text, View } from "react-native";
import React from "react";
import YellowStar from "./IconsSvg/YellowStar";

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <YellowStar />
        <Text style={styles.h1}>יומן מסע</Text>
      </View>
      <Text style={styles.h2}>הרשמו בקלות</Text>
    </View>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    height: 240,
    backgroundColor: "#072F5F",
    borderBottomLeftRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    color: "#fff",
    fontSize: 40,
    margin: 20,
  },
  h2: {
    color: "#fff",
    fontSize: 25,
  },
});
