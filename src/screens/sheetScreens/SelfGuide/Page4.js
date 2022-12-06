import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import PrevButton from "../../../components/PrevButton";
import NextButton from "../../../components/NextButton";

const Page4 = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <View style={styles.TextContainer}>
          <Text style={styles.textThree}>
          סיכום אישי שלכם את ההדרכה, תובנה שלכם, מסר שלכם לקבוצה
          </Text>
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput
            placeholder="מקום לטקסט"
            direction="rtl"
            multiline={true}
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
        </View>

        <View style={styles.ButtonContainer}>
          <View style={{ width: 100 }}>
            <NextButton
              title="הבא"
              onPress={() => {
                console.log("the text is:", text);
                navigation.navigate("Page5");
              }}
            />
          </View>

          <View>
            <Text>שלב 4 מתוך 5</Text>
          </View>

          <View style={{ width: 100 }}>
            <PrevButton
              title="הקודם"
              onPress={() => {
                navigation.navigate("Page3");
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
    // marginTop: 15,
    paddingTop: 15,
    backgroundColor: "#FFFF",
  },
  TextContainer: {
    width: "90%",
    flexDirection: "row",
    // alignItems: "end",
    justifyContent: "right",
  },
  textThree: {
    fontSize: 12,
    color: "#8B8787",
    marginBottom: 8,
  },
  TextTwo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#072F5F",
    marginBottom: 15,
  },
  TextInputContainer: {
    width: "90%",
  },
  input: {
    height: 280,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 30,
    textAlign: "right",
  },
  input2: {
    width: "100%",
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 30,
    textAlign: "right",
  },
  ButtonContainer: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
  TextStatus: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
  StatusContainer : {
    width: "90%",
    flexDirection: "row-reverse",
    justifyContent: "right",
    alignItems: "center",
    marginBottom: 20,
  }
});
export default Page4;
