import {Image, StyleSheet, Text, View} from "react-native";

import React from "react";

const PlaceholderImage = require("../../assets/fallbackImage.png");

const GuideHeader = () => {
    return (<View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.h1}>משלחת רוגוזין 2023</Text>
            <Text style={styles.h2}>הקבוצה של רפי</Text>
        </View>
        <View></View>
        <View style={styles.circle}>
            <Image source={PlaceholderImage} style={styles.image}></Image>
        </View>
        <View style={styles.name}>
            <Text style={styles.h3}>יאנוש קורצק</Text>
        </View>
    </View>);
};

export default GuideHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#072F5F", borderBottomLeftRadius: 50, flexDirection: "row", height: 150,
    }, header: {
        flexDirection: "column",
        width: "100%",
        height: 100,
        position: "relative",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    }, h1: {
        color: "#fff", fontSize: 40, fontFamily: "arial", margin: 20,
    }, h2: {
        color: "#fff", fontFamily: "arial", fontSize: 20,
    }, h3: {
        color: "#fff", fontFamily: "arial", fontSize: 14,
    }, name: {
        height: 75, top: 90, left: 140, levation: 10, position: "absolute",
    }, img: {
        borderRadius: 50, alignContent: "center",
    }, circle: {
        height: 50,
        flexDirection: "column",
        width: 50,
        borderRadius: 50,
        position: "absolute",
        top: 30,
        left: 150,
        elevation: 10,
        backgroundColor: "white",
    }, image: {
        width: 130, height: 130, borderRadius: 65, resizeMode: "contain",
    },
});
