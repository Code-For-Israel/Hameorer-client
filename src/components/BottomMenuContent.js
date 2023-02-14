import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

import {useNavigation} from "@react-navigation/native";

const sheetLinks = [
    {
        id: "1",
        title: "הדרכה עצמית",
        screen: "SelfGuide",
    },
    {
        id: "2",
        title: "הכנת טקס",
        screen: "Ceremony",
    },
    {
        id: "3",
        title: "זכרון משפחתי",
        screen: "FamilyMem",
    },
    // {
    //     id: "4",
    //     title: "יומן אישי",
    //     screen: "PersonalDiary",
    // },
    {
        id: "5",
        title: "דמות",
        screen: "DID",
    },

];

export default function BottomMenuContent({onClose}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {sheetLinks.map((item) => {
                return (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            //this is if the screens are inside the another stack like More in the plusScreen.js
                            // navigation.navigate("More", { screen: item.screen });
                            navigation.navigate(item.screen);
                            onClose();
                        }}
                    ><View style={styles.button}>
                        <Text style={styles.buttonText}>{item.title}</Text>
                    </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: "#B6CEFF",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 1,
        padding: 10,
    },
    buttonText: {
        fontSize: 24,
    }
});
