import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/PagesStyle';

const sheetLinks = [
    {
        id: '1',
        title: 'הדרכה עצמית',
        screen: 'SelfGuide',
        // disable: true,
    },
    {
        id: '2',
        title: 'דמות מונפשת',
        screen: 'DID',
        disable: false,
    },
    {
        id: '3',
        title: 'הכנת טקס',
        screen: 'Ceremony',
        disable: true,
    },
    {
        id: '4',
        title: 'זכרון משפחתי',
        screen: 'FamilyMem',
        disable: true,
    },
    {
        id: '5',
        title: 'יומן אישי',
        screen: 'PersonalDiary',
        disable: true,
    },
];

export default function BottomMenuContent({onClose}) {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            {sheetLinks.map((item) => {
                return (
                    <TouchableOpacity
                        disabled={item.disable}
                        key={item.id}
                        onPress={() => {
                            //this is if the screens are inside the another stack like More in the plusScreen.js
                            // navigation.navigate("More", { screen: item.screen });
                            navigation.navigate(item.screen);
                            onClose();
                        }}
                    >
                        <View style={styles.bottomMenuButton}>
                            {!item.disable && <Text style={styles.buttonText}>{item.title}</Text>}
                            {item.disable && (
                                <Text style={styles.buttonTextDisable}>{item.title}</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
