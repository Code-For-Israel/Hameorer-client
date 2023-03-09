import {Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from 'react';

import BottomSheet from '../components/BottomSheet';
import BottomMenuContent from '../components/BottomMenuContent';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import GuideHeader from '../components/GuideHeder';
import PrevButton from '../components/NextButton';
import HorizelScrollCardsProfile from '../components/HorizelScrollCardsProfile';
import UseFetchGet from '../hooks/ApiCalls/useFetchGet';
import GetSiteUrl from '../utils/GetSiteUrl';
import {logoutThunk} from '../redux/userSlice';
import {useDispatch} from 'react-redux';

export default function ProfileScreen() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [userDelegation, setUserDelegation] = useState([]);
    const url = GetSiteUrl() + 'v1/authentication/userinfo';
    const {data} = UseFetchGet(url);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            setUserInfo(data);
            setUserDelegation(data.delegation);
        }
    }, [data]);

    const PlaceholderImage = require('../../assets/fall.jpeg');
    const handlePress = () => {
        setIsModalVisible(true);
    };
    const onModalClose = () => {
        setIsModalVisible(false);
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
            <ScrollView style={styles.container}>
                <GuideHeader userDelegation={userDelegation} />

                <Image source={PlaceholderImage} style={styles.image} />

                <View style={{marginBottom: 20, paddingTop: 5}}>
                    <Text style={styles.h1} numberOfLines={1} adjustsFontSizeToFit>
                        הודעות
                    </Text>
                </View>
                <View style={{marginRight: 20, marginBottom: 20}}>
                    <Text>מאת עמית - 13.3.2023</Text>
                    <Text>
                        {''}היום נעבור בתערוכת "יד לילד", תערוכת "גטו ורשה הלוחם", סדנת "החייאת מרד מחדש" ועדות של הלינה בירנבאום
                        בהצלחה ביום ותודה
                    </Text>
                </View>

                <View
                    style={{
                        width: 200,
                        marginLeft: 20,
                        paddingBottom: 20,
                        paddingTop: 10,
                    }}
                >
                    <PrevButton onPress={() => console.log(userInfo)} title="לחץ לכל ההודעות" />
                </View>

                <View>
                    <Text style={styles.h1}>סטטוס משימות</Text>
                </View>
                <View>
                    <HorizelScrollCardsProfile
                        style={{zIndex: 1}}
                        list={userInfo.stories}
                    ></HorizelScrollCardsProfile>
                </View>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                ></View>

                <BottomSheet isVisible={isModalVisible} onClose={onModalClose}>
                    <BottomMenuContent onClose={onModalClose} />
                </BottomSheet>
                <Button title={'LogOut'} onPress={() => dispatch(logoutThunk())}></Button>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    h1: {
        fontSize: 24,
        color: '#072F5F',
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
        marginRight: 15,
        paddingTop: 10,
    },
    image: {
        width: '100%',
        height: 150,
        alignSelf: 'center',
    },
});
