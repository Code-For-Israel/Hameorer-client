import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {List, Provider} from 'react-native-paper';
import {styles} from '../../../styles/PagesStyle';
import HorizonteScrollCards from './HorizelScrollCards';
import {useDispatch, useSelector} from 'react-redux';
import {logoutThunk, selectAccess} from '../../../redux/userSlice';
import GetSiteUrl from '../../../utils/GetSiteUrl';
import ReturnIcon from '../../../components/IconsSvg/ReturnIcon';
import ApproveIcon from '../../../components/IconsSvg/ApproveIcon';
import ThreeDotCircleIcon from '../../../components/IconsSvg/ThreeDotCircleIcon';
import { useIsFocused } from '@react-navigation/native';

const MyGroup = () => {
    const baseUrl = GetSiteUrl();
    const access = useSelector(selectAccess);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(true);
    const [groupInfo, setGroupInfo] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (access && isFocused) {
            fetch(`${baseUrl}v1/authentication/groupinfo`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${access}`,
                },
            })
                .then((response) => response.json())
                .then((json) => setGroupInfo(json))
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }
    }, [access, baseUrl, isFocused]);

    let pending = [];
    let review = [];
    let done = [];

    groupInfo &&
        groupInfo.users &&
        groupInfo.users.map((user) => {
            if (user && user.stories.length > 0) {
                user.stories.map((story) => {
                    let storyObj = {
                        fullName: user.firstname + ' ' + user.lastname,
                        subject: story.subject.subject,
                        location: story.body.quote_location,
                        dateBirth: 1902,
                        dateDeath: 1954,
                        _id: story._id,
                        story: story,
                        image: story.media.image,
                    };
                    if (story.status === 'done') done.push(storyObj);
                    if (story.status === 'review') review.push(storyObj);
                    if (story.status === 'pending') pending.push(storyObj);
                });
            }
        });

    return (
        <Provider>
            <ScrollView style={styles.mainContainer}>
                <View style={stylesIn.HeaderSection}>
                    <View style={{width: '100%'}}>
                        <List.Accordion
                            style={{
                                background: '#D9D9D9',
                                height: 47,
                                textAlignLast: 'right',
                                borderRadius: 5,
                            }}
                            title={groupInfo?.group_name}
                            left={(props) => <List.Icon {...props} icon="file-edit-outline" />}
                        >
                            <List.Item title="חלק 1 שנפתח" style={{textAlignLast: 'right'}} />
                            <List.Item
                                title="?חלק 2 שנפתח - מה שמים פה"
                                style={{textAlignLast: 'right'}}
                            />
                        </List.Accordion>
                    </View>
                </View>
                <Button title={'LogOut'} onPress={() => dispatch(logoutThunk())}></Button>

                <View style={{alignSelf: 'center'}}>
                    <Text style={stylesIn.groupSubtitle}>
                        ציטוט מונפש ({pending.length + review.length + done.length})
                    </Text>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingTop: 5}}>
                        <Text style={styles.cardComponentTextBlack}>
                            ממתין למשוב ({pending.length})
                        </Text>
                        <View style={{paddingTop: 5, paddingLeft: 2}}>
                            <ThreeDotCircleIcon></ThreeDotCircleIcon>
                        </View>
                    </View>
                    <HorizonteScrollCards list={pending}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.cardComponentTextBlack}>
                            הוחזר מתיקונים ({review.length})
                        </Text>
                        <View style={{paddingTop: 5, paddingLeft: 2}}>
                            <ReturnIcon></ReturnIcon>
                        </View>
                    </View>
                    <HorizonteScrollCards list={review}></HorizonteScrollCards>
                </View>
                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={styles.cardComponentTextBlack}>אושר({done.length})</Text>
                        <View style={{paddingTop: 5, paddingLeft: 2}}>
                            <ApproveIcon></ApproveIcon>
                        </View>
                    </View>
                    <HorizonteScrollCards list={done}></HorizonteScrollCards>
                </View>
            </ScrollView>
        </Provider>
    );
};

export default MyGroup;

const stylesIn = StyleSheet.create({
    HeaderSection: {
        padding: 0,
        width: '100%',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
    },
    groupSubtitle: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 31,
        textAlign: 'right',
        color: '#000000',
    },
});
