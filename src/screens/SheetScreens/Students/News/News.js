import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from 'react';

import GetSiteUrl from '../../../../utils/GetSiteUrl';
import {styles} from '../../../../styles/PagesStyle';
import {useSelector} from 'react-redux';
import {selectAccess} from '../../../../redux/userSlice';
import {format} from 'date-fns';
import PrevButton from '../../../../components/NextButton';
import {useNavigation} from '@react-navigation/native';

export default function News() {
    const access = useSelector(selectAccess);
    const [notifications, setNotifications] = useState();
    const notificationUrl = GetSiteUrl() + 'v1/authentication/notification/';
    const navigation = useNavigation();

    useEffect(() => {
        fetch(notificationUrl, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access}`,
            },
        })
            .then((response) => response.json())
            .then((json) => setNotifications(json))
            .catch((error) => console.error(error));
    }, [access, notificationUrl]);

    return (
        <>
            <ScrollView style={stylesIn.container}>
                {notifications && notifications.length > 0 && (
                    <View style={{marginRight: 20, marginBottom: 20}}>
                        <Text style={styles.textDirectionRTL}>
                            מאת עמית -{' '}
                            {format(new Date(notifications[0].publish_date), 'dd/LL/yyyy')}
                        </Text>
                        <Text style={stylesIn.notificationTitle}>{notifications[0].title}</Text>
                        <Text style={styles.textDirectionRTL}>{notifications[0].message}</Text>
                    </View>
                )}
            </ScrollView>
            <View
                style={{
                    width: '90%',
                    margin: 10,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignSelf: 'center',
                }}
            >
                <PrevButton
                    title={'לכל ההודעות'}
                    onPress={() => {
                        navigation.navigate('NewsPage', notifications);
                    }}
                ></PrevButton>
            </View>
        </>
    );
}

const stylesIn = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    h1: {
        fontSize: 24,
        color: '#072F5F',
        marginBottom: 15,
        marginTop: 15,
        marginRight: 15,
        paddingTop: 10,
        textAlign: 'right',
        writingDirection: 'rtl',
    },
    notificationTitle: {
        fontSize: 18,
        color: '#072F5F',
        marginBottom: 2,
        marginTop: 2,
        textAlign: 'right',
        writingDirection: 'rtl',
    },
});
