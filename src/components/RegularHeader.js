import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {logoutThunk} from '../redux/userSlice';
import PrevButton from './NextButton';
import {useDispatch} from 'react-redux';

const PlaceholderImage = require('../../assets/fallbackImage.png');
const NotificationIcon = require('../../assets/NotificationIcon.png');

const RegularHeader = ({title}) => {
    const dispatch = useDispatch();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.h2} numberOfLines={1} adjustsFontSizeToFit>
                        {title}
                    </Text>
                </View>
                <View style={{top: 70, right: 130, height: 40, width: 120}}>
                    <PrevButton title={'התנתק'} onPress={() => dispatch(logoutThunk())}></PrevButton>
                </View>
                <View style={styles.notificationIconContainer}>
                    <Image source={NotificationIcon} style={styles.notificationIcon}/>
                </View>
                <View style={styles.circle}>
                    <Image source={PlaceholderImage} style={styles.image}/>
                </View>
            </View>
        </>
    );
};

export default RegularHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#072F5F',
        borderBottomLeftRadius: 50,
        flexDirection: 'row',
        height: 150,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'column',
        width: '100%',
        height: 100,
        position: 'relative',

        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // h1: {
    //     color: '#fff',
    //     margin: 2,
    // },
    h2: {
        fontSize: 18,
        color: '#fff',
    },
    h3: {
        color: '#fff',

        fontSize: 14,
    },
    name: {
        height: 75,
        top: 90,
        left: 20,
        position: 'absolute',
    },
    circle: {
        height: 50,
        flexDirection: 'column',
        width: 50,
        borderRadius: 50,
        position: 'absolute',
        top: 25,
        left: 15,
        elevation: 10,
        backgroundColor: 'white',
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    notificationIconContainer: {
        position: 'absolute',
        top: 20,
        right: 10,
    },
    notificationIcon: {
        width: 50,
        height: 50,
        tintColor: 'white',
    },
});
