import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-native-paper';
import UseFetchGet from '../../../hooks/ApiCalls/useFetchGet';
import GetSiteUrl from '../../../utils/GetSiteUrl';
import ImageViewer from '../../../components/ImageViewer';
import PlaceholderImage from '../../../../assets/fallbackImage.png';
import SoundPlayer from '../../../components/SoundPlayer/SoundPlayer';
import {styles} from '../../../styles/PagesStyle';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import VideoPlayer from '../Guides/VideoPlayer';
import PlayAudioIcon from "../../../components/IconsSvg/PlayAudioIcon";

const width = Dimensions.get('window').width; //full width

const ViewTask = ({route}) => {
    const navigation = useNavigation();
    const [storyUrl, setStoryUrl] = useState();
    const id = route.params;
    const baseUrl = GetSiteUrl();
    const {data} = UseFetchGet(storyUrl);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (id && isFocused) {
            setStoryUrl('');
            setStoryUrl(baseUrl + 'v1/stories/' + id);
        }
    }, [id,isFocused,baseUrl]);

    const HandelSend = () => {
        navigation.navigate('Profile');
    };
    return (
        data &&
        data.body && (
            <Provider>
                <ScrollView style={stylesIn.container}>
                    {/* headSection - name dates and + button*/}
                    <View style={stylesIn.HeadSection}>
                        <View style={stylesIn.ImageContainer}>
                            <ImageViewer
                                placeholderImageSource={PlaceholderImage}
                                selectedImage={data.media?.image}
                                width={130}
                            />
                        </View>
                        <View style={stylesIn.detailsContainer}>
                            <Text style={[stylesIn.h1,style.textDirectionRTL]}>{data.subject.subject}</Text>
                            <Text style={[stylesIn.textBody,style.textDirectionRTL]}>{data.body.quote_location}</Text>

                            <Text style={[stylesIn.textSubTitle,style.textDirectionRTL]}>
                                תאריך לידה: {data.subject.birth_date}
                            </Text>
                            <Text style={[stylesIn.textSubTitle,style.textDirectionRTL]}>
                                תאריך פטירה: {data.subject.death_date}
                            </Text>
                        </View>
                    </View>
                    {/* end of head Section */}
                    {/* quote */}
                    {data.status !== 'done' && (
                        <View style={stylesIn.TextInputContainer}>
                            <TextInput
                                disabled={true}
                                direction="rtl"
                                multiline={true}
                                style={[stylesIn.input, stylesIn.inputBig]}
                                value={data.body.quote}
                            />
                        </View>
                    )}
                    {/* origin */}

                    {data.status !== 'done' && (
                        <>
                            <View
                                style={[
                                    stylesIn.TextInputContainer,
                                    {flexDirection: 'row-reverse'},
                                ]}
                            >
                                {/*<SoundPlayer audioFile={''}></SoundPlayer>*/}
                                <PlayAudioIcon></PlayAudioIcon>

                            </View>
                            {/*הערות מדריך*/}
                            <View style={stylesIn.TextInputContainer}>
                                <TextInput
                                    disabled={true}
                                    placeholder="הערות של מדריך"
                                    multiline={true}
                                    value={data.comments?.one}
                                    direction="rtl"
                                    style={[
                                        stylesIn.input,
                                        {height: 100, textAlignVertical: 'top'},
                                    ]}
                                />
                            </View>
                        </>
                    )}
                    {data.status === 'done' && (
                        <>
                            <VideoPlayer url={data}></VideoPlayer>
                            <View
                                style={[
                                    stylesIn.TextInputContainer,
                                    {flexDirection: 'row-reverse'},
                                ]}
                            >
                                <Text style={[stylesIn.input, {fontWeight: 'bold'}]}>
                                    {' '}
                                    מקור ציטוט{' '}
                                </Text>
                                <TextInput
                                    disabled={true}
                                    direction="rtl"
                                    style={stylesIn.input}
                                    value={data.body.quote_source}
                                />
                            </View>
                        </>
                    )}
                    {/* send btn */}
                    <TouchableOpacity style={stylesIn.cardComponentButton} onPress={HandelSend}>
                        <Text style={styles.cardComponentTextWhite}>חזרה</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Provider>
        )
        // end of sound
    );
};

export default ViewTask;

const stylesIn = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    HeadSection: {
        padding: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    h1: {
        fontSize: 24,
        color: '#2B3F66',
        fontWeight: 'bold',
        marginBottom: 15,
    },
    textBody: {
        fontSize: 16,
        marginBottom: 5,
    },
    textSubTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    TextInputContainer: {
        width: '100%',
        paddingHorizontal: 5,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        fontSize: 18,
        textAlign: 'right',
    },
    inputBig: {
        height: 280,
        textAlignVertical: 'top',
    },
    ImageContainer: {
        // flex: 1,
        // padding: 1,
        borderRadius: 65,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },
    greyText: {
        alignSelf: 'center',
        color: '#8B8787',
        marginBottom: 10,
    },
    cardComponentButton: {
        width: width * 0.4,
        backgroundColor: '#1261A0',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
