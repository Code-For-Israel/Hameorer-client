import {Linking, ScrollView, Text, View} from 'react-native';
import React from 'react';
import IconComponent from '../IconComponent/IconComponent';
import {styles} from '../../styles/PagesStyle';

export function MaterialBottomScroll({media}) {
    const filteredMedia = media?.filter(item => item.bucket === 'hameorer-txt');
    const filteredMediaWithUrls = filteredMedia?.map(item => {
                let typeItem
                if (/png|jpeg|jpg/.test(item.type.toLowerCase())) {
                    typeItem = 'image'
                }
                else if (/pdf|pps|docx/.test(item.type.toLowerCase())) {
                    typeItem = 'file-document'
                }
                else if (/mp3|mp4/.test(item.type.toLowerCase())) {
                    typeItem = 'youtube'
                }
                else typeItem='web'
                return {
                    type: typeItem,
                    http_link: item.http_link,
                    name: item.name
                };
            }
        )
    ;

    console.log(filteredMediaWithUrls);

    const onPressAction = (item) => {
        if (item.type === 'youtube') {
            Linking.openURL(item.http_link);
        } else if (item.type === 'web') {
            Linking.openURL(item.http_link);
        } else if (item.type === 'image') {
            Linking.openURL(item.http_link);
        } else if (item.type === 'file-document') {
            Linking.openURL(item.http_link);
        } else {
            Linking.openURL(item.http_link);
        }
    };

    const showIcons = () => {
        return filteredMediaWithUrls
            ? filteredMediaWithUrls.map((item, key) => (
                <IconComponent
                    key={key}
                    icon={item.type}
                    onPressAction={() => onPressAction(item)}
                ></IconComponent>
            ))
            : '';
    };

    return (
        <View style={[styles.bottomScrollContainer]}>
            <Text style={[styles.textDirectionRTL, {marginBottom: 2, width: '95%'}]}>
                עזרים להדרכה
            </Text>
            <ScrollView horizontal={true}>{showIcons()}</ScrollView>
        </View>
    );
}
