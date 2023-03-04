import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {styles} from '../../styles/PagesStyle';

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default Loading;
