import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const sheetLinks = [
  {
    id: "1",
    title: "הדרכה עצמית",
    screen: "Self",
  },
  {
    id: "2",
    title: "הכנת טקס",
    screen: "Ceremony",
  },
  {
    id: "3",
    title: "זכרון משפחתי",
    screen: "FamilyMem",
  },
  {
    id: "4",
    title: "יומן אישי",
    screen: "PersonalDiary",
  },
];

export function BottomMenuContent({ onClose }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {sheetLinks.map((item) => {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigation.navigate("More", { screen: item.screen });
              onClose();
            }}
          ><View style={styles.button}>
            <Text style={styles.buttonText}>{item.title}</Text>
          </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  button: {
    // backgroundColor: "#1261A0",
    backgroundColor: "#B6CEFF",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 1,
    padding: 10,
  },
  buttonText:{
    fontSize: 24,
  }
});
