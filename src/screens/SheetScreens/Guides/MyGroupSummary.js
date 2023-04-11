import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../../styles/PagesStyle';
import {useSelector} from 'react-redux';
import {selectAccess} from '../../../redux/userSlice';
import GetSiteUrl from '../../../utils/GetSiteUrl';
import DataTableGuide from '../../../components/DataTables/DataTableGuide';
import {Provider} from 'react-native-paper';
import DataTableExplain from '../../../components/DataTables/DataTableExplain';
import GuideHeader from './GuideHeader';

const MyGroupSummary = () => {
    const baseUrl = GetSiteUrl();
    const access = useSelector(selectAccess);
    const [isLoading, setLoading] = useState(true);
    const [groupInfo, setGroupInfo] = useState([]);

    useEffect(() => {
        if (access) {
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
    }, [access, baseUrl]);

    let pendingDid = [];
    let reviewDid = [];
    let doneDid = [];
    let pendingPolinActivity = [];
    let reviewPolinActivity = [];
    let donePolinActivity = [];
    const [groupName, setGroupName] = useState(true);

    useEffect(() => {
        if (groupInfo && groupInfo.users) {
            setGroupName(groupInfo?.group_name);
        }
    }, [groupInfo]);

    groupInfo &&
        groupInfo.users &&
        groupInfo.users.map((user) => {
            if (user && user.stories.length > 0) {
                user.stories.map((story) => {
                    let storyObj = {
                        subjectType: story.subject.type,
                        status: story.status,
                    };
                    if(storyObj.subjectType==='figure') {
                        if (storyObj.status === 'done') doneDid.push(storyObj);
                        if (storyObj.status === 'review') reviewDid.push(storyObj);
                        if (storyObj.status === 'pending') pendingDid.push(storyObj);
                    }
                    if(storyObj.subjectType==='polin-activity') {
                        if (storyObj.status === 'done') donePolinActivity.push(storyObj);
                        if (storyObj.status === 'review') reviewPolinActivity.push(storyObj);
                        if (storyObj.status === 'pending') pendingPolinActivity.push(storyObj);
                    }
                });
            }
        });

    return (
        <Provider>
            <ScrollView style={styles.mainContainer}>
                <GuideHeader groupInfo={groupInfo}></GuideHeader>
                <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingTop: 5}}>
                    <Text style={styles.cardComponentTextBlack}>הכנה לטקס</Text>
                </View>
                <DataTableExplain groupName={groupName}></DataTableExplain>

                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingTop: 5, paddingRight: 15}}>
                        <Text style={styles.cardComponentTextBlack}>ציטוט מונפש</Text>
                    </View>
                    <DataTableGuide
                        headers={['ממתין למשוב', 'הוחזר לתיקונים', 'אושר']}
                        data={[...pendingDid, ...reviewDid, ...doneDid]}
                    ></DataTableGuide>
                </View>

                <View>
                    <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingTop: 5, paddingRight: 15}}>
                        <Text style={styles.cardComponentTextBlack}>הדרכה עצמית</Text>
                    </View>
                    <DataTableGuide
                        headers={['ממתין למשוב', 'הוחזר לתיקונים', 'אושר']}
                        data={[...pendingPolinActivity, ...reviewPolinActivity, ...donePolinActivity]}
                    ></DataTableGuide>
                </View>
            </ScrollView>
        </Provider>
    );
};

export default MyGroupSummary;
