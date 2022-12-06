import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const TabButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.tabButton}>
        <Icon name="add" size={30} color={"#fff"} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    width: 50,
    height: 50,
    backgroundColor: "#FCBF49",
    color: "#fff",
    position: "absolute",
    top: -40,
    left: -25,
    elevation: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabButton;