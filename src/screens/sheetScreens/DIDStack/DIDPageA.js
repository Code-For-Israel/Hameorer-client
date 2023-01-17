import {ImageBackground, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
import React, {useState} from "react";
import NextButton from "../../../components/NextButton";
import {ProgressBar} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";

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

const DIDPageA = ({navigation}) => {
    const [tags, setTags] = useState(tagsConst);

    const toggleTag = (i) => {
        const newTags = [...tags];
        newTags[i].isClicked = !newTags[i].isClicked;
        setTags(newTags);
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.headContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                navigation.navigate("DIDPageB", tags);
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
                {/* first, search figure */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("DIDPageB", tags);
                    }}
                >
                    <View style={styles.SearchbarStyleContainer}>
                        <Icon name="search" size={28} color={"#000"}/>
                        <Text style={styles.SearchStyle}>חפש דמות</Text>
                    </View>
                </TouchableOpacity>
                {/*end of first, search figure */}
                {/* second newFigure */}
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("DIDPageD", tags);
                    }}
                >
                    <View style={styles.SearchbarStyleContainer}>
                        <Icon name="add" size={28} color={"#000"}/>
                        <Text style={styles.SearchStyle}>צור דמות חדשה</Text>
                    </View>
                </TouchableOpacity>

                {/*end of second newFigure */}

                {/* tags section */}
                <View style={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                        <TouchableOpacity onPress={() => toggleTag(index)} key={index}>
                            <View
                                style={[
                                    styles.tagBox,
                                    {backgroundColor: tag.isClicked ? "#FCBF49" : "#b4b6b9"},
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.tagText,
                                        {color: tag.isClicked ? "#fff" : "#000"},
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
        backgroundColor: "#c2c2c2",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: 0.5,
        padding: 10,
        paddingHorizontal: 15,
    },
    SearchStyle: {
        fontSize: 18,
        color: "#000",
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
