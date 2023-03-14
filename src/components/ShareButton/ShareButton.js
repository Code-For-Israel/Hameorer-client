import React from 'react';
import {Alert, Share, View, Button, Image, StyleSheet, Dimensions} from 'react-native';
import PrevButton from '../PrevButton';
const ShareImage = require('../../../assets/tiktok.png');
const width = Dimensions.get('window').width; //full width

const ShareExample = () => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: 'React Native | A framework for building native apps using React',
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
            <Image source={ShareImage} style={stylesIn.image} />
            {/*<PrevButton onPress={onShare} title="שתף" />*/}
            <PrevButton title="שתף" />
        </View>
    );
};

export default ShareExample;

const stylesIn = StyleSheet.create({
    image: {
        width: width * 0.6,
        height: 50,
    },
});
