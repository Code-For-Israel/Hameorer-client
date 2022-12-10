import { View, StyleSheet, ScrollView, Linking, Text } from "react-native";
import React from "react";
import { mockItems } from "./mockItems";
import IconComponent from "../IconComponent/IconComponent";

export function MaterialBottomScroll() {
  const onPressAction = (item) => {
    if (item.type === "youtube") {
      Linking.openURL("https://youtube.com");
    } else if (item.type === "web") {
      Linking.openURL("https://google.com");
    } else if (item.type === "image") {
      console.log("download image");
    } else if (item.type === "file-document") {
      console.log("download file");
    } else {
      console.log("unknown");
    }
  };

  const showIcons = () => {
    return mockItems
      ? mockItems.map((item, key) => (
          <IconComponent
            key={key}
            icon={item.type}
            onPressAction={() => onPressAction(item)}
          ></IconComponent>
        ))
      : "";
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.TextOne, { marginBottom: 2, width: "95%" }]}>
        עזרים הדרכה
      </Text>
      <ScrollView horizontal={true}>{showIcons()}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 20,
    width: "100%",
  },
});
