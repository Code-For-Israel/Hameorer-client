import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import NextButton from "../../../components/NextButton";
import PrevButton from "../../../components/PrevButton";
import { ProgressBar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "../../../components/ImageViewer";

const PlaceholderImage = require("../../../../assets/fallbackImage.png");

const DIDPageD = ({ navigation, route }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  const tags = route.params;
  // const handleFigurePress = (props) => {
  //   navigation.navigate("DIDPageC",{...props, tags});
  // }
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [deathDate, setDeathDate] = useState("");

  const createFigure = () => {
    navigation.navigate("DIDPageE", {
      fullName,
      location,
      birthDate,
      deathDate,
      selectedImage,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headContainer}>
        <View style={{ width: 100 }}>
          <NextButton title="הבא" onPress={createFigure} />
        </View>
        <Text style={styles.headText}>שלב 1 מתוך 2</Text>
        <View style={{ width: 100 }}>
          <PrevButton
            title="הקודם"
            onPress={() => {
              navigation.navigate("DIDPageA");
            }}
          />
        </View>
      </View>
      <View style={styles.ProgressBarContainer}>
        {/* note that the progress is reversed */}
        <ProgressBar
          progress={0.5}
          color={"#D9D9D9"}
          style={styles.ProgressBarStyle}
        />
      </View>

      <View style={styles.textInputWide}>
        <TextInput
          placeholder={"שם מלא"}
          direction="rtl"
          style={styles.inputFullname}
          onChangeText={setFullName}
          value={fullName}
        />
      </View>
      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={pickImageAsync}>
          {selectedImage ? (
            <View style={styles.imageContainer}>
              <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
              />
            </View>
          ) : (
            <View style={styles.plusContainer}>
              <Icon name="add" size={30} color={"#fff"} />
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.textInput}>
          <TextInput
            placeholder={"מיקום"}
            direction="rtl"
            style={styles.input}
            onChangeText={setLocation}
            value={location}
          />
          <TextInput
            placeholder={"תאריך לידה"}
            direction="rtl"
            style={styles.input}
            onChangeText={setBirthDate}
            value={birthDate}
          />

          <TextInput
            placeholder={"תאריך פטירה"}
            direction="rtl"
            style={styles.input}
            onChangeText={setDeathDate}
            value={deathDate}
          />
        </View>
      </View>
      {/* end of input sections */}
      <View style={styles.btnView}>
        <NextButton title={"צור דמות"} onPress={createFigure} />
      </View>
    </ScrollView>
  );
};

export default DIDPageD;

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
  textInputWide: {
    marginBottom: 5,
    padding: 10,
  },
  inputFullname: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    fontSize: 18,
    textAlign: "right",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    fontSize: 18,
    textAlign: "right",
    width: 140,
  },
  textInput: {},
  sectionContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
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
  btnView: {
    width: 100,
    alignSelf: "center",
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    padding: 1,
  },
});
