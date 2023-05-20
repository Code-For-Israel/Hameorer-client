import React from 'react';
import {Alert, Share, View, Button, Image, StyleSheet, Dimensions} from 'react-native';
import PrevButton from '../PrevButton';
const ShareImage = require('../../../assets/tiktok.png');
const width = Dimensions.get('window').width; //full width

const ShareMedia = ({url}) => {
    const videoLink = url?.media?.did;

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: videoLink,
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            Alert.alert(error.message);
        }
    };
    return (
        <View style={{padding: 5, marginBottom: 20, width: width, flexDirection: 'row-reverse'}}>
            <Image onPress={onShare} source={ShareImage} style={stylesIn.image} />
            <PrevButton onPress={onShare} title="שתף" />
        </View>
    );
};

export default ShareMedia;

const stylesIn = StyleSheet.create({
    image: {
        width: width * 0.6,
        height: 50,
    },
});
