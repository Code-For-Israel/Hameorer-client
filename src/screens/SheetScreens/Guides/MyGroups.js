import {ScrollView, StyleSheet, Text, View,} from "react-native";
import React from "react";
import {Provider} from "react-native-paper";
import {selectVisable,} from "../../../redux/dataSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectAccess} from "../../../redux/userSlice";
import {styles} from "../../../styles/PagesStyle";
import HorizonteScrollCards from "./HorizelScrollCards";
import Icon from '@mdi/react';
import {mdiAutoFix, mdiCheck, mdiClockTimeFiveOutline} from '@mdi/js';

const MyGroup = () => {
    let mock_data = require("./mock_data.json")
    console.log(mock_data)
    const dispatch = useDispatch();
    const visible = useSelector(selectVisable);
    const access = useSelector(selectAccess);
    let pending = []
    let review = []
    let done = []

    mock_data && mock_data.users.map((user) => {
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
            console.log(storyObj)
            if (story.status === 'pending')
                pending.push(storyObj)
            if (story.status === 'review')
                review.push(storyObj)
            if (story.status === 'done')
                done.push(storyObj)
        }
    })

    return (
        <Provider>
            <ScrollView style={styles.mainContainer}>
                <View style={stylesIn.HeadSection}>
                    <Text>הקבוצה שלי</Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Text style={stylesIn.groupSubtitle}>ציטוט מונפש</Text>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.cardComponentTextBlack}>ממתין למשוב ({pending.length})</Text>
                        <Icon path={mdiClockTimeFiveOutline} size={1}/>
                    </View>
                    <HorizonteScrollCards list={pending}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.cardComponentTextBlack}>הוחזר מתיקונים ({review.length})</Text>
                        <Icon path={mdiAutoFix} size={1}/>

                    </View>
                    <HorizonteScrollCards list={review}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.cardComponentTextBlack}>אושר({done.length})</Text>
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
