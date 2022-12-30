import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import NextButton from "../../../components/NextButton";
import { ProgressBar, Searchbar } from "react-native-paper";

const image = require("../../../../assets/bgdid.png");
const tagsConst = [
  {
    value: "#מרדות",
    isClicked: false,
  },
  {
    value: "#חינוך",
    isClicked: false,
  },
  {
    value: "#נשים",
    isClicked: false,
  },
  {
    value: "#פרטיזנים",
    isClicked: false,
  },
  {
    value: "#תיוג-נוסף",
    isClicked: false,
  },
  {
    value: "#2תיוג-נוסף",
    isClicked: false,
  },
  {
    value: "#3תיוג-נוסף",
    isClicked: false,
  },

  {
    value: "#4תיוג-נוסף",
    isClicked: false,
  },
  {
    value: "#5תיוג-נוסף",
    isClicked: false,
  },
  {
    value: "#6תיוג-נוסף",
    isClicked: false,
  },
];

const DIDPageA = ({ navigation }) => {
  const [newFigure, setNewFigure] = useState("");
  const [figureQuery, setFigureQuery] = useState("");
  const [tags, setTags] = useState(tagsConst);

  const handleIconPress = () => {
    console.log("pressed plus icon", newFigure);
  };

  const toggleTag = (i) => {
    console.log("toogle this:", i);
    const newTags = [...tags];
    newTags[i].isClicked = !newTags[i].isClicked;
    setTags(newTags);
    console.log(tags);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.headContainer}>
          <View style={{ width: 100 }}>
            <NextButton
              title="הבא"
              onPress={() => {
                // console.log("the sub is: ", value)
                // console.log("the text is:", text)
                navigation.navigate("DIDPageB",tags);
              }}
            />
          </View>
          <Text style={styles.headText}>שלב 1 מתוך 3</Text>
          <View>
            <Text style={styles.prevText}>הקודם</Text>
          </View>
        </View>
        <View style={styles.ProgressBarContainer}>
          {/* note that the progress is reversed */}
          <ProgressBar
            progress={0.66}
            color={"#D9D9D9"}
            style={styles.ProgressBarStyle}
          />
        </View>
        {/* first searchbar */}
        <View style={styles.SearchbarStyleContainer}>
          <Searchbar
            placeholder="חפש דמות"
            inputStyle={styles.SearchbarStyle}
            iconColor="#000"
            onChange={(e) => setFigureQuery(e.target.value)}
            value={figureQuery}
          />
        </View>
        {/*end of first searchbar */}
        {/* second searchbar */}

        <View style={styles.SearchbarStyleContainer}>
          <Searchbar
            placeholder="צור דמות חדשה"
            inputStyle={styles.SearchbarStyle}
            iconColor="#000"
            icon="plus"
            onIconPress={handleIconPress}
            value={newFigure}
            onChange={(e) => setNewFigure(e.target.value)}
          />
        </View>
        {/*end of second searchbar */}

        {/* tags section */}
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <TouchableOpacity onPress={() => toggleTag(index)} key={index}>
              <View
                style={[
                  styles.tagBox,
                  { backgroundColor: tag.isClicked ? "#FCBF49" : "#b4b6b9" },
                ]}
              >
                <Text
                  style={[
                    styles.tagText,
                    { color: tag.isClicked ? "#fff" : "#000" },
                  ]}
                >
                  {tag.value}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        {/* end of tags */}
        {/*end of container*/}
      </ImageBackground>
    </View>
  );
};

export default DIDPageA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  headContainer: {
    // backgroundColor: "#d0b581",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  headText: {
    fontSize: 16,
  },
  prevText: {
    opacity: 0,
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
  SearchbarStyleContainer: {
    marginHorizontal: 8,
    marginTop: 20,
    opacity: 0.7,
  },
  SearchbarStyle: {
    textAlign: "right",
  },
  tagsContainer: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    padding: 20,
    marginTop: 40,
  },
  tagBox: {
    backgroundColor: "#b4b6b9",
    paddingVertical: 10,
    paddingHorizontal: 8,
    opacity: 0.9,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  tagText: {
    fontSize: 18,
    color: "#000",
  },
});
