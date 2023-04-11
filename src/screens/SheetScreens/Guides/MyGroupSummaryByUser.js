import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../../styles/PagesStyle';
import {useSelector} from 'react-redux';
import {selectAccess} from '../../../redux/userSlice';
import GetSiteUrl from '../../../utils/GetSiteUrl';
import ReturnIcon from '../../../components/IconsSvg/ReturnIcon';
import ApproveIcon from '../../../components/IconsSvg/ApproveIcon';
import ThreeDotCircleIcon from '../../../components/IconsSvg/ThreeDotCircleIcon';
import {Provider} from 'react-native-paper';
import DataTableByUser from '../../../components/DataTables/DataTableByUser';
import GuideHeader from './GuideHeader';

const MyGroupSummaryByUser = () => {
    const baseUrl = GetSiteUrl();
    const access = useSelector(selectAccess);
    const [isLoading, setLoading] = useState(true);
    const [groupInfo, setGroupInfo] = useState([]);
    const [groupName, setGroupName] = useState(true);

    useEffect(() => {
        if (groupInfo && groupInfo.users) {
            setGroupName(groupInfo?.group_name);
        }
    }, [groupInfo]);

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

    let storiesByUser = [];

    groupInfo &&
    groupInfo.users &&
    groupName &&
    groupInfo.users.map((user) => {
        if (user && user.stories.length > 0) {
            let storyObj = {
                fullName: user.firstname + ' ' + user.lastname,
                group: groupName,
                statusDid: '',
                statusPolinActivity: ''
            };
            user.stories.map((story) => {
                if (story.subject.type === 'figure')
                    storyObj.statusDid = story.status
                else if (story.subject.type === 'polin-activity')
                    storyObj.statusPolinActivity = story.status
            });
           storiesByUser.push(storyObj);
        }
    });

    return (
        <Provider>
            <ScrollView style={styles.mainContainer}>
                <GuideHeader groupInfo={groupInfo}></GuideHeader>
                <View style={{alignSelf: 'center'}}>
                    <Text style={stylesIn.groupSubtitle}>דו"ח משימות</Text>
                </View>
                <View style={{flexDirection: 'row-reverse'}}>
                    <ThreeDotCircleIcon></ThreeDotCircleIcon>
                    <Text style={{paddingLeft: 10}}>הוחזר לתיקונים</Text>
                    <ReturnIcon></ReturnIcon>
                    <Text style={{paddingLeft: 10}}>טרם הוגש</Text>
                    <ApproveIcon></ApproveIcon>
                    <Text style={{paddingLeft: 10}}>אושר</Text>
                </View>
                <View>
                    <DataTableByUser storiesByUser={storiesByUser}></DataTableByUser>
                </View>
            </ScrollView>
        </Provider>
    );
};

export default MyGroupSummaryByUser;

const stylesIn = StyleSheet.create({
    groupSubtitle: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 31,
        textAlign: 'right',
        color: '#000000',
    },
});
