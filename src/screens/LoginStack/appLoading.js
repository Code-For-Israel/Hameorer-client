import {ImageBackground, View} from 'react-native';
import React from 'react';
import {styles} from '../../styles/PagesStyle';

const image = require('../../../assets/favicon.png');

const appLoading = () => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={image} style={styles.image}></ImageBackground>
        </View>
    );
};

export default appLoading;
