import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import NextButton from "../../../components/NextButton";
import PrevButton from "../../../components/PrevButton";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

import ImageViewer from "../../../components/ImageViewer";
import { useDispatch, useSelector } from "react-redux";
import { selectAccess } from "../../../redux/userSlice";
import { setStory } from "../../../redux/dataSlice";

const PlaceholderImage = require("../../../../assets/fallbackImage.png");

const DIDPageE = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const access = useSelector(selectAccess);

  const figure = route.params;

  const [text, setText] = useState("");
  const [textOrigin, setTextOrigin] = useState("");
  const [sound, setSound] = useState("");
  const wasHandleSend = () => {
    console.log("will create a new figure with this:");
    console.log("name:" + figure.fullName);
    console.log("location" + figure.location);
    console.log("birth date" + figure.birthDate);
    console.log("death date" + figure.deathDate);
    console.log("qute" + text);
    console.log("source" + textOrigin);
    console.log("sound");
    console.log("image" + figure.selectedImage);
  };

  const handleSend = () => {
    const story = {
      subject: {
        type: "figure",
        subject: figure.fullName,
        date_birth: figure.birthDate,
        date_death: figure.deathDate,
      },
      tags: ["_"],
      body: {
        background: "כאן צריך להיות רקע על הדמות",
        quote_date: "1968",
        quote_source: textOrigin,
        qoute_location: figure.location,
        qoute_title: "בית ספר לרוח האדם",
        qoute: text,
      },
      // created_by: "None",
      comments: {
        one: "comment one",
        two: "comment two",
      },
      status: "pending",
      media: {
        one: "media one photo",
        two: "media two sound",
      },
    };

    dispatch(setStory({ access, story }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={{ width: 100 }}>
          <Text style={styles.nextText}>הבא</Text>
        </View>
        <Text style={styles.headText}>שלב 2 מתוך 2</Text>
        <View style={{ width: 100 }}>
          <PrevButton
            title="הקודם"
            onPress={() => {
              navigation.navigate("DIDPageD");
            }}
          />
        </View>
      </View>
      <View style={styles.ProgressBarContainer}>
        {/* note that the progress is reversed */}
        <ProgressBar
          progress={0}
          color={"#D9D9D9"}
          style={styles.ProgressBarStyle}
        />
      </View>
      {/* headSection - name dates and + button*/}
      <View style={styles.HeadSection}>
        <View style={styles.imageContainer}>
          <ImageViewer
            placeholderImageSource={PlaceholderImage}
            selectedImage={figure.selectedImage}
          />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.h1}>{figure.fullName}</Text>
          <Text style={styles.textBody}>{figure.location}</Text>

          <Text style={styles.textSubTitle}>
            תאריך לידה: {figure.birthDate}
          </Text>
          <Text style={styles.textSubTitle}>
            תאריך פטירה: {figure.deathDate}
          </Text>
        </View>
      </View>
      {/* end of head Section */}
      {/* quote */}
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder="הוסף ציטוט"
          direction="rtl"
          multiline={true}
          style={[styles.input, styles.inputBig]}
          onChangeText={setText}
          value={text}
        />
      </View>
      {/* origin */}
      <View style={styles.TextInputContainer}>
        <TextInput
          placeholder={"הוסף מקור"}
          direction="rtl"
          style={styles.input}
          onChangeText={setTextOrigin}
          value={textOrigin}
        />
      </View>
      {/* sound sample */}

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.SearchbarStyleContainer}>
          <Icon name="upload-file" size={28} color={"#000"} />
          <Text style={styles.SearchStyle}>
            {" "}
            {sound ? sound.name : "העלה דגימת קול"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* end sound */}
      {/* send btn */}
      <View style={styles.send}>
        <NextButton title={"שלח"} onPress={handleSend} />
      </View>
    </View>
    // end of sound
  );
};

export default DIDPageE;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  nextText: {
    opacity: 0,
  },
  headText: {
    fontSize: 16,
  },
  ProgressBarContainer: {
    marginTop: 5,
    width: "90%",
    display: "flex",
    marginLeft: "5%",
  },
  ProgressBarStyle: {
    height: 8,
    backgroundColor: "#ADBCF2",
  },
  HeadSection: {
    padding: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  plusContainer: {
    fontSize: 24,
    backgroundColor: "#FCBF49",
    width: 67,
    height: 67,
    borderRadius: 67,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  h1: {
    fontSize: 24,
    color: "#2B3F66",
    fontWeight: "bold",
    marginBottom: 15,
  },
  textBody: {
    fontSize: 16,
    marginBottom: 5,
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  TextInputContainer: {
    width: "100%",
    paddingHorizontal: 15,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    fontSize: 18,
    textAlign: "right",
  },
  inputBig: {
    height: 280,
    textAlignVertical: "top",
  },
  inputSound: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  send: {
    width: 100,
    // marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    alignSelf: "flex-end",
  },
  SearchbarStyleContainer: {
    marginBottom: 10,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    textAlign: "right",
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SearchStyle: {
    fontSize: 18,
    color: "#000",
  },
  imageContainer: {
    flex: 1,
    padding: 1,
  },
});
