import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const NextButton = ({title, onPress, loading}) => (
    <TouchableOpacity
        style={!loading ? styles.button : styles.buttonDisable}
        onPress={onPress}
        disabled={loading}
    >
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1261A0',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonDisable: {
        backgroundColor: 'grey',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonTitle: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default NextButton;
