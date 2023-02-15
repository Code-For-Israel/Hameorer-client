import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import NextButton from "../../../components/NextButton";
import PrevButton from "../../../components/PrevButton";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomButton from "../../../components/CustomButton";
import * as DocumentPicker from "expo-document-picker";
import getSiteUrl from "../../../utils/getSiteUrl";

import ImageViewer from "../../../components/ImageViewer";
import {
  hideModal,
  selectVisable,
  setStory,
  showModal,
} from "../../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAccess } from "../../../redux/userSlice";

import {
  Modal,
  Portal,
  Button,
  Provider,
  RadioButton,
} from "react-native-paper";
import ThumbUp from "../../../components/IconsSvg/ThumbUp";

const PlaceholderImage = require("../../../../assets/fallbackImage.png");
const containerStyle = {
  backgroundColor: "#1261a0",
  padding: 20,
  width: 300,
  alignSelf: "center",
};

const ALLOWED_TYPES = [
  "audio/aac",
  "audio/mpeg",
  "audio/ogg",
  "audio/opus",
  "audio/3gpp",
  "audio/webm",
  "audio/wav",
];

const DIDPageC = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisable);
  const access = useSelector(selectAccess);
  const formData = new FormData();
  const baseUrl = getSiteUrl();

  let selectedImage = null;
  const figure = route.params;
  if (figure.media) {
    selectedImage = figure.media[0].http_link;
  }

  const pickAudio = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: ALLOWED_TYPES });
    if (result.type === "success") {
      if (ALLOWED_TYPES.includes(result.mimeType) === false)
        console.log("wrong type of file - only csv and excel");
      else {
        const fileUrl = result.uri;
        //create form data
        formData.append("type", result.file.type);
        const testURL = fileUrl.split(',')[1];
        formData.append("file", testURL);
        console.log(testURL);
        console.log(fileUrl);
        console.log(result.file.type);


        console.log("file is ready - now post");
        
        const url =baseUrl + "v1/media/hameorer-audio/" + result.file.name + '/';
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${access}`,
          },
          formData,
        });

        console.log(response);
        return response;
      }
    }
  };

  const handleSend = () => {
    const story = {
      subject: {
        type: "figure",
        subject: figure.subject,
        date_birth: figure.birth_date,
        date_death: figure.death_date,
      },
      tags: ["_"],
      body: {
        background: "",
        quote_date: "",
        quote_source: textOrigin,
        qoute_location: "",
        qoute_title: "",
        qoute: text,
      },
      // created_by: "None",
      comments: {
        one: "comment one",
        two: "comment two",
      },
      status: "pending",
      media: {
        one: selectedImage ? selectedImage : "none",
        two: "media two sound",
      },
    };

    dispatch(setStory({ access, story }));
  };
  const [text, setText] = useState("");
  const [textOrigin, setTextOrigin] = useState("");
  const [sound, setSound] = useState("");
  const [checked, setChecked] = useState("quote");

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => {
            dispatch(hideModal());
          }}
          contentContainerStyle={containerStyle}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              נשלח למדריך בהצלחה !
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 10,
            }}
          >
            <ThumbUp />
          </View>
        </Modal>
      </Portal>

      <ScrollView style={styles.container}>
        {/* headSection - name dates and + button*/}
        <View style={styles.HeadSection}>
          <View style={styles.ImageContainer}>
            {/* <Icon name="add" size={30} color={"#fff"} /> */}
            <ImageViewer
              placeholderImageSource={PlaceholderImage}
              selectedImage={selectedImage}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.h1}>{figure.subject}</Text>
            <Text style={styles.textBody}>{figure.location}</Text>

            <Text style={styles.textSubTitle}>
              תאריך לידה: {figure.birth_date}
            </Text>
            <Text style={styles.textSubTitle}>
              תאריך פטירה: {figure.death_date}
            </Text>
          </View>
        </View>
        {/* end of head Section */}

        {/* RadioButton */}
        <View style={styles.checkboxContainer}>
          <Text style={styles.TextCheckbox}>סוג המדיה: </Text>
          <Text style={styles.TextCheckbox}>ציטוט</Text>
          <RadioButton
            value="quote"
            status={checked === "quote" ? "checked" : "unchecked"}
            onPress={() => setChecked("quote")}
          />
          <Text style={styles.TextCheckbox}>דגימת קול</Text>
          <RadioButton
            value="voice"
            status={checked === "voice" ? "checked" : "unchecked"}
            onPress={() => setChecked("voice")}
          />
        </View>

        {/* quote */}
        {checked === "quote" && (
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
        )}
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
        {checked === "voice" && (
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.TextInputContainer}>
              <Text style={[styles.input, styles.inputSound]}>
                {sound ? sound.name : "העלה דגימת קול"}
                <Icon name="upload-file" size={24} color={"#000"} />
              </Text>
            </View>
            <CustomButton text="Upload File" onPress={pickAudio} />
          </TouchableOpacity>
        )}
        {/* end sound */}
        {/* send btn */}

        <View style={styles.headContainer}>
          <View style={styles.send}>
            <NextButton title={"שליחה"} onPress={handleSend} />
          </View>
          <Text style={styles.headText}>שלב 2 מתוך 2</Text>
          <View style={{ width: 100 }}>
            <NextButton
              title="הקודם"
              onPress={() => {
                navigation.navigate("DIDPageB", figure.tags);
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
        {/* <Button
          style={{ marginTop: 30 }}
          onPress={() => {
            dispatch(showModal());
          }}
        >
          Show
        </Button> */}
      </ScrollView>
    </Provider>
    // end of sound
  );
};

export default DIDPageC;

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
  checkboxContainer: {
    marginTop: 10,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
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
  TextCheckbox: {
    alignSelf: "center",
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
    marginLeft: 15,
    marginTop: 5,
  },
  ImageContainer: {
    // flex: 1,
    // padding: 1,
    borderRadius: 65,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
