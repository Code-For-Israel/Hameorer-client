import {ScrollView, StyleSheet, Text, View,} from "react-native";
import React from "react";
import {List, Provider} from "react-native-paper";
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
                <View style={stylesIn.HeaderSection}>
                    <View style={{width: "100%"}}>
                        <List.Accordion
                            style={{background: '#D9D9D9', height: 47, textAlignLast: 'right', borderRadius: 5}}
                            title="הקבוצה שלי"
                            left={props => <List.Icon {...props} icon="file-edit-outline"/>}>
                            <List.Item title="חלק 1 שנפתח" style={{textAlignLast: 'right'}}/>
                            <List.Item title="?חלק 2 שנפתח - מה שמים פה" style={{textAlignLast: 'right'}}/>
                        </List.Accordion>
                    </View>
                </View>
                <View style={{alignSelf: 'center'}}>
                    <Text style={stylesIn.groupSubtitle}>ציטוט מונפש
                        ({pending.length + review.length + done.length})</Text>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingTop: 5}}>
                        <Text style={styles.cardComponentTextBlack}>ממתין למשוב ({pending.length})</Text>
                        <Icon path={mdiClockTimeFiveOutline} size={1} style={{paddingTop: 5, paddingLeft: 2}}/>
                    </View>
                    <HorizonteScrollCards list={pending}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.cardComponentTextBlack}>הוחזר מתיקונים ({review.length})</Text>
                        <Icon path={mdiAutoFix} size={1} style={{paddingTop: 5, paddingLeft: 2}}/>

                    </View>
                    <HorizonteScrollCards list={review}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.cardComponentTextBlack}>אושר({done.length})</Text>
                        <Icon path={mdiCheck} size={1} style={{paddingTop: 5, paddingLeft: 2}}/>
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
