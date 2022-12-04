import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const TabButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="add" size={30} style={styles.tabButton} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    backgroundColor: "#FCBF49",
    color: "#fff",
    position: "absolute",
    top: -40,
    left: -15,
    margin: 0,
    padding: 5,
    borderRadius: 40,
  },
});

export default TabButton;
