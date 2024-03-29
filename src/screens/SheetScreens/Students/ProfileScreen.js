import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from 'react';

import BottomSheet from '../../../components/BottomSheet';
import BottomMenuContent from '../../../components/BottomMenuContent';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import GuideHeader from '../../../components/GuideHeder';
import PrevButton from '../../../components/NextButton';
import HorizelScrollCardsProfile from '../../../components/HorizelScrollCardsProfile';
import UseFetchGet from '../../../hooks/ApiCalls/useFetchGet';
import GetSiteUrl from '../../../utils/GetSiteUrl';
import News from './News/News';

export default function ProfileScreen() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [userDelegation, setUserDelegation] = useState([]);
    const [url, setUrl] = useState(GetSiteUrl() + 'v1/authentication/userinfo');
    const {data} = UseFetchGet(url);

    useEffect(() => {
        if (data) {
            setUserInfo(data);
            setUserDelegation(data.delegation);
        }
    }, [data]);

    const PlaceholderImage = require('../../../../assets/fall.jpeg');
    const handlePress = () => {
        setIsModalVisible(true);
    };
    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const handleRefresh = () => {
        setUrl(null);
        setUserInfo([]);

        setTimeout(() => {
            setUrl(GetSiteUrl() + 'v1/authentication/userinfo');
        }, 200);
    };

    return (
        <>
            <TouchableOpacity
                onPress={handlePress}
                style={{position: 'absolute', bottom: 20, right: 20, zIndex: 2}}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        backgroundColor: '#FCBF49',
                        color: '#fff',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                >
                    <MaterialCommunityIcons
                        style={{zIndex: 2}}
                        name="plus"
                        size={25}
                        color={'#fff'}
                    />
                </View>
            </TouchableOpacity>
            <ScrollView style={stylesIn.container}>
                <GuideHeader userDelegation={userDelegation} />

                <Image source={PlaceholderImage} style={stylesIn.image} />

                <News></News>
                <View
                    style={{
                        width: '90%',
                        marginBottom: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignSelf: 'center',
                    }}
                ></View>

                <View
                    style={{
                        width: '100%',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        marginBottom: 5,
                        textAlign: 'right',
                        writingDirection: 'rtl',
                    }}
                >
                    <View style={{width: 120}}>
                        <PrevButton title={'רענן מידע'} onPress={handleRefresh}></PrevButton>
                    </View>
                    <View>
                        <Text style={stylesIn.h1}>סטטוס משימות</Text>
                    </View>
                </View>
                <View>
                    <HorizelScrollCardsProfile
                        style={{zIndex: 1}}
                        list={userInfo.stories}
                    ></HorizelScrollCardsProfile>
                </View>

                <BottomSheet isVisible={isModalVisible} onClose={onModalClose}>
                    <BottomMenuContent onClose={onModalClose} />
                </BottomSheet>
            </ScrollView>
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
        textAlign: 'right',
        writingDirection: 'rtl',
    },
    image: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
    },
});
