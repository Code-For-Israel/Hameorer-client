import React from "react";
import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

import PlaceholderImage from "../../assets/fallbackImage.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const B = (props) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const guideCard = ({
  studentName,
  subject,
  country,
  yearBorn,
  yearDeath,
  onPress,
}) => (
  <>
    <View>
      <Card style={styles.cardComponent}>
        <Card.Content>
          <View style={{ height: 26 }}>
            <View style={styles.cardComponentTopPart}>
              <View>
                <MaterialIcons name="mail" color="#fff" size={15} />
              </View>
              <View>
                <Text style={styles.cardComponentText}>{studentName}</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardComponentInsideTextArea}>
            <View style={styles.cardComponentCInsideContainer}>
              <Image
                source={PlaceholderImage}
                style={styles.cardComponentImage}
              ></Image>
            </View>
            <View style={styles.cardComponentTextContainer}>
              <Text style={styles.cardComponentTextSize}>
                <B>נושא:</B> {subject}
              </Text>
              <Text style={styles.cardComponentTextSize}>
                <B>מדינה:</B> {country}
              </Text>
              <Text style={styles.cardComponentTextSize}>
                {yearBorn} <B>:תאריך לידה</B>
              </Text>
              <Text style={styles.cardComponentTextSize}>
                {yearDeath} <B>:תאריך פטירה</B>
              </Text>
              <TouchableOpacity
                style={styles.cardComponentButton}
                onPress={onPress}
              >
                <Text style={styles.cardComponentText}>{"לציטוט המלא"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  </>
);
const styles = StyleSheet.create({
  cardComponent: {
    width: 270,
    height: 200,
    backgroundColor: "#072F5F",
    margin: 2,
  },
  cardComponentText: { color: "white" },
  cardComponentTopPart: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  cardComponentInsideTextArea: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    height: 150,
    borderRadius: 10,
  },
  cardComponentTextSize: { fontSize: 11 },
  cardComponentCInsideContainer: {
    width: 130,
    padding: 1,
    aspectRatio: 1,
    alignSelf: "center",
  },
  cardComponentImage: { width: "100%", aspectRatio: 1 },
  cardComponentTextContainer: {
    width: 100,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  cardComponentButton: {
    width: 100,
    backgroundColor: "#1261A0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default guideCard;

