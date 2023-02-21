import {ScrollView, StyleSheet, Text, View,} from "react-native";
import React, {useEffect, useState} from "react";
import {Provider} from "react-native-paper";
import {styles} from "../../../styles/PagesStyle";
import HorizonteScrollCards from "./HorizelScrollCards";
import Icon from '@mdi/react';
import {mdiAutoFix, mdiCheck, mdiClockTimeFiveOutline} from '@mdi/js';

const MyGroup = () => {
    const baseUrl = "http://3.140.113.123:8000/";
    const access = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MDIzMDMxLCJpYXQiOjE2NzcwMTk0MzEsImp0aSI6IjBlZGJmMWM5YWEwNTQ0ODk5YTE2MDBkNGM5MGEzMDE3IiwidXNlcl9pZCI6IjFmMDBjMjdkLTM3YWUtNGYzMC1iZmMxLWY2Nzk4MTYyN2Y3OSJ9.A8_OUxMnMq-n271YFdaGm4G64ti0LneFuwXnUB3yHxY"
    const [isLoading, setLoading] = useState(true);
    const [groupInfo, setGroupInfo] = useState([]);

    useEffect(() => {
        if (access) {
            fetch(`${baseUrl}api/v1/authentication/groupinfo`, {
                method: "GET", headers: {
                    accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${access}`,
                },
            }).then((response) => response.json())
                .then((json) => setGroupInfo(json))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }
    }, [access]);

    let pending = []
    let review = []
    let done = []

    groupInfo && groupInfo.users && groupInfo.users.map((user) => {
        let story
        if (user && user.stories.length > 0) {
            story = user.stories[0];
            let storyObj = {
                fullName: user.firstname + ' ' + user.lastname,
                subject: story.subject.subject,
                location: story.body.qoute_location,
                dateBirth: 1902,
                dateDeath: 1954
            }
            if (story.status === 'done')
                done.push(storyObj)
            if (story.status === 'review')
                review.push(storyObj)
            if (story.status === 'pending')
                pending.push(storyObj)
        }
    })

    return (
        <Provider>
            <ScrollView style={styles.mainContainer}>
                <View style={stylesIn.HeadSection}>
                    <Text>הקבוצה שלי</Text>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text>ממתין למשוב ({pending.length})</Text>
                        <Icon path={mdiClockTimeFiveOutline} size={1}/>
                    </View>
                    <HorizonteScrollCards list={pending}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text>הוחזר מתיקונים ({review.length})</Text>
                        <Icon path={mdiAutoFix} size={1}/>

                    </View>
                    <HorizonteScrollCards list={review}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text>אושר({done.length})</Text>
                        <Icon path={mdiCheck} size={1}/>
                    </View>
                    <HorizonteScrollCards list={done}></HorizonteScrollCards>
                </View>
            </ScrollView>
        </Provider>
    );
};

export default MyGroup;

const stylesIn = StyleSheet.create({
    HeadSection: {
        padding: 5,
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "space-between",
    },
    HeaderSection: {
        padding: 0,
        width: '100%',
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "right",
    },
    groupSubtitle: {
        fontFamily: 'Assistant',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 24,
        lineHeight: 31,
        textAlign: 'right',
        color: '#000000'
    }
});