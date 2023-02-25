import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";

const PlaceholderImage = require("../../assets/fallbackImage.png");
const NotificationIcon = require("../../assets/notificationIcon.png");

const GuideHeader = (userDelegation) => {
    console.log(userDelegation.userDelegation)
    return (<View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.h1}>משלחת רוגוזין 2023</Text>
            <Text style={styles.h2}>{userDelegation.userDelegation.group_name}</Text>
        </View>
        <View style={styles.notificationIconContainer}>
            <Image source={NotificationIcon} style={styles.notificationIcon}/>
        </View>
        <View style={styles.circle}>
            <Image source={PlaceholderImage} style={styles.image}/>
        </View>
        <View style={styles.name}>
            <Text
                style={styles.h3}> {userDelegation.userDelegation?.guides?.length > 0 ? userDelegation.userDelegation.guides[0].firstname + ' ' + userDelegation.userDelegation.guides[0].lastname : ''}</Text>
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
        fontFamily: "Assistant",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    }, h1: {
        color: "#fff", fontSize: 40, fontFamily: "Assistant", margin: 20,
    }, h2: {
        color: "#fff", fontFamily: "Assistant", fontSize: 20,
    }, h3: {
        color: "#fff", fontFamily: "Assistant", fontSize: 14,
    }, name: {
        height: 75, top: 90, left: 140, position: "absolute",
    }, img: {
        borderRadius: 50, alignContent: "center",
    }, circle: {
        height: 50,
        flexDirection: "column",
        width: 50,
        borderRadius: 50,
        position: "absolute",
        top: 15,
        left: 15,
        elevation: 10,
        backgroundColor: "white",
    }, image: {
        width: 50, height: 50, resizeMode: "contain",
    }, notificationIconContainer: {
        position: "absolute", top: 10, right: 10,
    }, notificationIcon: {
        width: 50, height: 50, tintColor: "white",
    },
});