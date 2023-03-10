import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const PrevButton = ({title, onPress}) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    buttonTitle: {
        color: '#1261A0',
        fontWeight: 'bold',
    },
});

export default PrevButton;
