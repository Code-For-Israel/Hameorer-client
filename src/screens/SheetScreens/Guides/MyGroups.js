import {ScrollView, StyleSheet, Text, View,} from "react-native";
import React from "react";
import {Provider} from "react-native-paper";
import {selectVisable,} from "../../../redux/dataSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectAccess} from "../../../redux/userSlice";
import GuideCard from "../../../components/GuideCard";
import {styles} from "../../../styles/PagesStyle";

const PlaceholderImage = require("../../../../assets/fallbackImage.png");


const MyGroup = () => {
    let x = require("./mock_data.json")
    console.log(x)
    const dispatch = useDispatch();
    const visible = useSelector(selectVisable);
    const access = useSelector(selectAccess);

    return (
        <Provider>
            <ScrollView style={styles.mainContainer}>
                <View style={stylesIn.HeadSection}>
                    <Text>הקבוצה שלי</Text>
                </View>
                <View style={stylesIn.HeadSection}>
                    <Text>ממתין למשוב</Text>
                    <GuideCard subject={'מרד גטו ורשה'} country={'הונגריה'} studentName={'יוני בלוך'} yearDeath={1955} yearBorn={1948}
                               onPress={() => console.log("ok")}></GuideCard>
                    <GuideCard subject={'מרד גטו ורשה'} country={'הונגריה'} studentName={'יוני בלוך'} yearDeath={1955} yearBorn={1948}
                               onPress={() => console.log("ok")}></GuideCard>
                    <GuideCard subject={'מרד גטו ורשה'} country={'הונגריה'} studentName={'יוני בלוך'} yearDeath={1955} yearBorn={1948}
                               onPress={() => console.log("ok")}></GuideCard>
                    <GuideCard subject={'מרד גטו ורשה'} country={'הונגריה'} studentName={'יוני בלוך'} yearDeath={1955} yearBorn={1948}
                               onPress={() => console.log("ok")}></GuideCard>
                </View>
                <View style={stylesIn.HeadSection}>
                    <Text>הוחזר מתיקונים</Text>
                </View>
                <View style={stylesIn.HeadSection}>
                    <Text>אושר</Text>
                </View>
            </ScrollView>
        </Provider>
    );
};

export default MyGroup;

const containerStyle = {
    backgroundColor: "#fff",
    padding: 10,
    width: 300,
    alignSelf: "center",
    borderRadius: 15,
};

const stylesIn = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    footerContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    checkboxContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
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
        padding: 5,
        flexDirection: "column",
        alignSelf: "flex-end",
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
    greyText: {
        alignSelf: "center", color: "#8B8787", marginBottom: 10
    }
});
