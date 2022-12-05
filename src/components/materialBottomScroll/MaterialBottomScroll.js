import {View, StyleSheet, ScrollView, Linking} from "react-native";
import React from "react";
import {mockItems} from "./mockItems";
import IconComponent from "../IconComponent/IconComponent";


export function MaterialBottomScroll() {

    const onPressAction = (item) => {
        if (item.type === 'youtube') {
            Linking.openURL('https://youtube.com')
        } else if (item.type === 'web') {
            Linking.openURL('https://google.com')
        } else if (item.type === 'image') {
            console.log('download image')
        } else if (item.type === 'file-document') {
            console.log('download file')
        } else {
            console.log("unknown")
        }
    };

    const showIcons = () => {
        return (mockItems ? mockItems.map((item, key) => (
                <IconComponent key={key} icon={item.type} onPressAction={() => onPressAction(item)}></IconComponent>
            )) : ''
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                {showIcons()}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
});
