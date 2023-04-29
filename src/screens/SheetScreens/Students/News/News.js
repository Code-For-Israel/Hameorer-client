import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';

import GetSiteUrl from '../../../../utils/GetSiteUrl';
import {styles} from '../../../../styles/PagesStyle';
import {useSelector} from "react-redux";
import {selectAccess} from "../../../../redux/userSlice";
import {format} from 'date-fns';

export default function News() {
    const access = useSelector(selectAccess);
    const [notifications, setNotifications] = useState();
    const notificationUrl = GetSiteUrl() + 'v1/authentication/notification/';

    useEffect(() => {
        fetch(notificationUrl, {
            method: 'GET', headers: {
                accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${access}`,
            },
        })
            .then((response) => response.json())
            .then((json) => setNotifications(json))
            .catch((error) => console.error(error))
    }, [access, notificationUrl]);

    return (<>
        <View style={{marginBottom: 20, paddingTop: 5}}>
            <Text style={stylesIn.h1} numberOfLines={1} adjustsFontSizeToFit>
                הודעות
            </Text>
        </View>
        <View style={{maxHeight: 100}}>
            <ScrollView style={stylesIn.container}>
                {notifications && notifications.map((note) => {
                    const date = (format(new Date(note.publish_date), 'dd/LL/yyyy'));
                    return (
                    <View key={note.id} style={{marginRight: 20, marginBottom: 20}}>
                        <Text style={styles.textDirectionRTL}>מאת עמית - {date}</Text>
                        <Text style={stylesIn.notificationTitle}>{note.title}</Text>
                        <Text style={styles.textDirectionRTL}>{note.message}</Text>
                    </View>
                )})}
            </ScrollView>
        </View>
    </>);
}

const stylesIn = StyleSheet.create({
    container: {
        flex: 1, position: 'relative',
    }, h1: {
        fontSize: 24,
        color: '#072F5F',
        marginBottom: 15,
        marginTop: 15,
        marginRight: 15,
        paddingTop: 10,
        textAlign: 'right',
        writingDirection: 'rtl',
    }, notificationTitle: {
        fontSize: 18,
        color: '#072F5F',
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'right',
        writingDirection: 'rtl',
    }, image: {
        width: '100%', height: 150, alignSelf: 'center',
    },
});
