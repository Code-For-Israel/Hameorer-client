import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React, { useEffect, useState } from "react";
import NextButton from "../../../components/NextButton";
import PrevButton from "../../../components/PrevButton";
import { ProgressBar, Searchbar } from "react-native-paper";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getStories, selectServerData } from "../../../redux/dataSlice";
import { selectAccess } from "../../../redux/userSlice";

const DIDPageB = ({ navigation, route }) => {
  // const [filteredFigure, setFilteredFigure] = useState(figures);
  const [figures, setFigures] = useState([]);
  const [filteredFigure, setFilteredFigure] = useState([]);
  const [figureQuery, setFigureQuery] = useState("");
  const tags = route.params;

  const dispatch = useDispatch();
  const storiesData = useSelector(selectServerData);
  const access = useSelector(selectAccess);


  
  useEffect(() => {
    if (access) {
      dispatch(getStories(access));
    }
  }, []);

  
  useEffect(() => {
    const extractDataFromPull = (data) => {
      let arr = data?.map((element) => ({
        head: element.subject.subject,
        body: element.body.background,
        //birth year
        //death year
      }));
      setFigures(arr);
      setFilteredFigure(arr);
    };
    if (storiesData.length) {
      extractDataFromPull(storiesData);
    }
  }, [storiesData]);


  const onChangeSearch = (query) => {
    setFigureQuery(query);
    setFilteredFigure(
      figures.filter((item) =>
        item.head.toLowerCase().includes(query.toLowerCase())
      )
      // .slice(0, 20)
    );
  };
  const handleFigurePress = (props) => {
    navigation.navigate("DIDPageC", { ...props, tags });
  };

  // console.table(tags);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headContainer}>
        <View style={{ width: 100 }}>
          <NextButton
            title="הבא"
            onPress={() => {
              // console.log("the sub is: ", value)
              // console.log("the text is:", text)
              // navigation.navigate("DIDPageC");
              handleFigurePress({
                head: "יאנוש-קורצק",
                body: "טקסט שתיים שלוש",
              });
            }}
          />
        </View>
        <Text style={styles.headText}>שלב 2 מתוך 3</Text>
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
          progress={0.33}
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
          onChangeText={onChangeSearch}
          value={figureQuery}
        />
      </View>
      {/*end of first searchbar */}
      {/* tags section */}
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => {
          if (tag.isClicked) {
            return (
              <View style={styles.tagBox} key={index}>
                <Text style={styles.tagText}>{tag.value}</Text>
              </View>
            );
          }
        })}
      </View>

      <View style={styles.figuresContainer}>
        {filteredFigure.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleFigurePress(item)}
            >
              <View style={styles.figureBox}>
                <Text style={styles.figureHead}>{item.head}</Text>
                <Text style={styles.figureBody}>{item.body}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* end of tags */}
    </ScrollView>
  );
};

export default DIDPageB;

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
    padding: 10,
    marginTop: 20,
  },
  tagBox: {
    backgroundColor: "#FCBF49",
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
    color: "#fff",
  },
  figuresContainer: {
    padding: 10,
  },
  figureBox: {
    borderColor: "#3895D3",
    borderWidth: 1,
    marginBottom: 10,
    // marginHorizontal: 5,
    padding: 10,
    borderRadius: 15,
  },
  figureHead: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  figureBody: {
    color: "black",
  },
});
