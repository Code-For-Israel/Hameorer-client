import {Image, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
// import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import {useEffect, useState} from "react";

// import getSiteUrl from "../utils/getSiteUrl";
import BottomSheet from "../components/BottomSheet";
import BottomMenuContent from "../components/BottomMenuContent";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useSelector} from "react-redux";
import {selectAccess} from "../redux/userSlice";

import GuideHeader from "../components/GuideHeder";
import PrevButton from "../components/NextButton";
import HorizelScrollCardsProfile from "../components/HorizelScrollCardsProfile";

export default function ProfileScreen() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const access = useSelector(selectAccess);
    const [userInfo, setUserInfo] = useState([]);

    const getUserInfo = async (access) => {
        const baseUrl = "http://3.140.113.123:8000/";
        const response = await fetch(`${baseUrl}api/v1/authentication/userinfo`, {
            method: "GET", headers: {
                accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${access}`,
            },
        })

        return response;
    }

    useEffect(() => {
        if (access)
            getUserInfo(access).then((response) => response.json())
                .then((json) => setUserInfo(json))
                .catch((error) => console.error(error))
    }, []);


    const PlaceholderImage = require("../../assets/fall.jpeg");
    const handlePress = () => {
        setIsModalVisible(true);
    };
    const onModalClose = () => {
        setIsModalVisible(false);
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

            <TouchableOpacity
                onPress={handlePress}
                style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    zIndex: 2
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
                    <MaterialCommunityIcons style={{zIndex:2}} name="plus" size={25} color={"#fff"}/>
                </View>
            </TouchableOpacity>
            <View style={styles.image1}>
                <Image source={PlaceholderImage} style={styles.image}/>
            </View>
            <View style={{marginBottom: 20, paddingTop: 5}}>
                <Text style={styles.h1}>הודעות</Text>
            </View>
            <View style={{marginRight: 20, marginBottom: 20}}>
                <Text>מאת עמית-12:00</Text>
                <Text>
                    {" "}
                    עוד יומיים ניפגש לסדנה שנייה בתהליך ההכנה נראה את הסרט ״סיפורו של נער
                    ארטיליאי״ ונדבר מה הופך ילדתמים לחלק מחבורה גזענית
                </Text>
            </View>

            <View
                style={{
                    width: 200,
                    marginLeft: 20,
                    paddingBottom: 20,
                    paddingTop: 10,
                }}
            >
                <PrevButton onPress={() => console.log(userInfo)} title="לחץ לכל ההודעות"/>
            </View>

            <View>
                <Text style={styles.h1}>סטטוס משימות</Text>
            </View>
            <View>
                <HorizelScrollCardsProfile style={{zIndex: 1}} list={userInfo.stories}></HorizelScrollCardsProfile>
            </View>
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
                <BottomMenuContent onClose={onModalClose}/>
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    image1: {
        flex: 1,
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
        paddingTop: 10,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});
