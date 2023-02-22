import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
// import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import { useState } from "react";

// import getSiteUrl from "../utils/getSiteUrl";
import BottomSheet from "../components/BottomSheet";
import BottomMenuContent from "../components/BottomMenuContent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ImageViewer from "../components/ImageViewer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setAccess, setRefresh } from "../redux/userSlice";

import GuideHeader from "../components/GuideHeder";
import PrevButton from "../components/NextButton";
import { guideCard } from "../components/guideCard";

export default function ProfileScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const PlaceholderImage = require("../../assets/fall.jpeg");
  const handlePress = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  // const {data, loading} = UseFetchGet(
  //     getSiteUrl() + "v1/authentication/user/"
  // );

  const data = "";
  const loading = "";
  const [parsedData, setParsedData] = useState(null);

  // enable this for getting the login
  // const x = getTokenAccess()

  const logout = async () => {
    //first clear the local storage
    try {
      await AsyncStorage.removeItem("refreshToken");
    } catch (e) {
      // remove error
    }
    //then update the redux store
    dispatch(setAccess(""));
    dispatch(setRefresh(""));
  };

  return (
    <View style={styles.container}>
      <GuideHeader
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      />
      <View style={styles.image1}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <TouchableOpacity
        onPress={handlePress}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#FCBF49",
            color: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <MaterialCommunityIcons name="plus" size={25} color={"#fff"} />
        </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.h1}>הודעות</Text>
      </View>
      <View style={{ marginRight: 20 }}>
        <Text>מאת עמית-12:00</Text>
        <Text>
          {" "}
          עוד יומיים ניפגש לסדנה שנייה בתהליך ההכנה נראה את הסרט ״סיפורו של נער
          ארטיליאי״ ונדבר מה הופך ילדתמים לחלק מחבורה גזענית
        </Text>
      </View>

      <View style={{ width: 200, marginLeft: 20, paddingBottom: 20 }}>
        <PrevButton title="לחץ לכל ההודעות" />
      </View>

      <View>
        <Text style={styles.h1}>סטטוס משימות</Text>
      </View>

      <guideCard />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      ></View>

      {/* <View style={{ width: 100, alignContent: "center", marginLeft: 20 }}>
        <PrevButton title="Log Out" onPress={logout} />
      </View> */}

      {/* <UploadExcelFile parsedData={parsedData} setParsedData={setParsedData} /> */}
      {/* <Text>{loading ? "Loading data ........." : "Data Loaded!"}</Text>
      <Button
        title={"click to pull groups and console log them"}
        onPress={() => console.log(data)}
      />
*/}
      <BottomSheet isVisible={isModalVisible} onClose={onModalClose}>
        <BottomMenuContent onClose={onModalClose} />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    position: "relative",
  },
  image1: {
    position: "absolute",
    width: 100,
    height: 100,
    alignContent: "center",
    marginLeft: 20,
    resizeMode: "",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  h1: {
    fontSize: 24,
    color: "#072F5F",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 15,
    marginRight: 15,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    resizeMode: "contain",
  },
});
