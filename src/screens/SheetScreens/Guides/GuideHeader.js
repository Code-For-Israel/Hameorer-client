import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-native-paper';
const GuideHeader = ({groupInfo}) => {
    return (
        <Provider>
            <View style={stylesIn.HeaderSection}>
                <View style={{width: '100%', margin: 10}}></View>
            </View>
        </Provider>
    );
};

export default GuideHeader;

const stylesIn = StyleSheet.create({
    HeaderSection: {
        padding: 0,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
});
