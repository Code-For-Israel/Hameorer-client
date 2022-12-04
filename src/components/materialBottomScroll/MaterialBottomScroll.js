import {View, StyleSheet, FlatList, ScrollView} from "react-native";
import React from "react";
import {mockItems} from "./mockItems";
import IconComponent from "../IconComponent/IconComponent";


export function MaterialBottomScroll() {

    //for each time do a diffrent action - video opens in a link, image does something else..
    const onPressAction = (item) => {
        if (item.type === 'video') {
            console.log('video')
        } else if (item.type === 'image') {
            console.log('image')
        } else if (item.type === 'file-document') {
            console.log('file')
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
