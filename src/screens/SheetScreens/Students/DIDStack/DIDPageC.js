import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import NextButton from '../../../../components/NextButton';
import {Banner, Modal, Portal, ProgressBar, Provider, Switch} from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import ImageViewer from '../../../../components/ImageViewer';
import {hideModal, selectVisable, setStory} from '../../../../redux/dataSlice';
import {useDispatch, useSelector} from 'react-redux';
import {selectAccess} from '../../../../redux/userSlice';
import CloseIcon from '../../../../components/IconsSvg/CloseIcon';
import UploadIcon from '../../../../components/IconsSvg/UploadIcon';
import GetSiteUrl from '../../../../utils/GetSiteUrl';
import {styles} from '../../../../styles/PagesStyle';

const PlaceholderImage = require('../../../../../assets/fallbackImage.png');
const containerStyle = {
    backgroundColor: '#fff',
    padding: 10,
    width: 300,
    alignSelf: 'center',
    borderRadius: 15,
};

const ALLOWED_TYPES = [
    'audio/aac',
    'audio/mpeg',
    'audio/ogg',
    'audio/opus',
    'audio/3gpp',
    'audio/webm',
    'audio/wav',
    'audio/m4a',
    'audio/mpeg',
    'audio/x-wav',
    'audio/x-aiff',
    'audio/x-m4a',
    'audio/x-caf',
    'audio/amr',
    'audio/flac',
    'audio/vnd.wave',
];

const DIDPageC = ({navigation, route}) => {
    const dispatch = useDispatch();
    const visible = useSelector(selectVisable);
    const access = useSelector(selectAccess);
    const bucket = 'hameorer-audio';
    const [recordingFileName, setRecordingFileName] = useState('');
    const [recordingData, setRecordingData] = useState(undefined);
    const [textQuote, setTextQuote] = useState('');
    const [textOrigin, setTextOrigin] = useState('');
    const [loading, setLoading] = useState(false);
    const [checkedVoiceOrText, setCheckedVoiceOrText] = useState('quote');
    const [checkedVoiceType, setCheckedVoiceType] = useState('men');
    const [visibleB, setVisibleB] = useState(false);
    const [isSwitchText, setIsSwitchText] = React.useState(false);
    const [isSwitchMale, setIsSwitchMale] = React.useState(true);

    let selectedImage = null;
    const figure = route.params;
    if (figure.media) {
        selectedImage = figure.media[0].http_link;
    }

    const pickAudio = async () => {
        let result = await DocumentPicker.getDocumentAsync({type: ALLOWED_TYPES});
        if (result.type === 'success') {
            if (ALLOWED_TYPES.includes(result.mimeType) === false)
                console.log('wrong type of file - only audio');
            else {
                setRecordingFileName(result.file.name);
                setRecordingData(result.file);
            }
        }
    };

    const handleSend = async () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 10000);
        let response;
        if (checkedVoiceOrText === 'voice' && recordingData && recordingData.type) {
            let recording = new FormData();
            recording.append('type', recordingData.type);
            recording.append('file', recordingData);
            const baseUrl = GetSiteUrl();
            response = await fetch(`${baseUrl}v1/media/${bucket}/${recordingFileName}/`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${access}`,
                },
                body: recording,
            }).then((response) => response.json());
        }
        if (
            figure &&
            textOrigin &&
            (checkedVoiceOrText === 'voice' || (checkedVoiceOrText === 'quote' && textQuote))
        ) {
            const story = {
                subject: figure,
                tags: ['_'],
                body: {
                    background: '',
                    quote_date: '',
                    quote_source: textOrigin,
                    quote_location: figure.address,
                    quote_title: '',
                    quote: textQuote,
                },
                comments: {
                    one: '',
                },
                status: 'pending',
                media: {
                    image: selectedImage ? selectedImage : 'none',
                    soundGender: checkedVoiceOrText === 'quote' ? checkedVoiceType : 'none',
                    soundBucket: response ? response.bucket : 'none',
                    soundHttpLink: response ? response.http_link : 'none',
                    soundName: response ? response.name : 'none',
                    soundS3Link: response ? response.s3_link : 'none',
                    soundType: response ? response.type : 'none',
                    soundId: response ? response._id : 'none',
                },
            };
            dispatch(setStory({access, story}));
        } else {
            setVisibleB(true);
        }
    };

    const onToggleSwitch = () => {
        setIsSwitchText(!isSwitchText);
        if (isSwitchText) setCheckedVoiceOrText('quote');
        else setCheckedVoiceOrText('voice');
    };

    const onToggleSwitchMale = () => {
        setIsSwitchMale(!isSwitchMale);
        if (!isSwitchMale) setCheckedVoiceType('men');
        else setCheckedVoiceType('woman');
    };

    return (
        <Provider>
            <Portal>
                <Banner
                    visible={visibleB}
                    actions={[
                        {
                            label: 'אישור',
                            onPress: () => {
                                setVisibleB(false);
                                setLoading(false);
                            },
                        },
                    ]}
                >
                    <Text style={{textAlign: 'center'}}> נא למלא את כל השדות</Text>
                </Banner>
                <Modal
                    visible={visible}
                    onDismiss={() => {
                        dispatch(hideModal());
                        navigation.navigate('Profile');
                    }}
                    contentContainerStyle={containerStyle}
                >
                    <View>
                        <View
                            style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Pressable
                                onPress={() => {
                                    dispatch(hideModal());
                                    navigation.navigate('Profile');
                                    setLoading(false);
                                }}
                            >
                                <CloseIcon />
                            </Pressable>
                        </View>

                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Text style={styles.textDirectionRTL}>עבודה טובה !</Text>
                            <Text style={styles.textDirectionRTL}>הציטוט שלך נשלח למשוב,</Text>
                            <Text style={styles.textDirectionRTL}>
                                תתקבל אצלך הודעה כשהוא יאושר.
                            </Text>
                        </View>
                    </View>
                </Modal>
            </Portal>

            <ScrollView style={stylesIn.container}>
                {/* headSection - name dates and + button*/}
                <View style={stylesIn.HeadSection}>
                    <View style={stylesIn.detailsContainer}>
                        <Text style={[stylesIn.h1, styles.textDirectionRTL]}>{figure.subject}</Text>
                        <Text style={[stylesIn.textBody, styles.textDirectionRTL]}>
                            {figure.location}
                        </Text>

                        <Text style={[stylesIn.textSubTitle, styles.textDirectionRTL]}>
                            תאריך לידה: {figure.birth_date}
                        </Text>
                        <Text style={[stylesIn.textSubTitle, styles.textDirectionRTL]}>
                            תאריך פטירה: {figure.death_date}
                        </Text>
                    </View>
                    <View style={stylesIn.ImageContainer}>
                        {/* <Icon name="add" size={30} color={"#fff"} /> */}
                        <ImageViewer
                            placeholderImageSource={PlaceholderImage}
                            selectedImage={selectedImage}
                            width={130}
                        />
                    </View>
                </View>
                {/* end of head Section */}

                <Text style={{alignSelf: 'center', fontSize: 16}}>
                    אפשר להוסיף ציטוט בכתב או בהקלטת קול,
                </Text>
                <Text style={{alignSelf: 'center', fontSize: 16}}>מה ההעדפה שלך?</Text>
                {/* RadioButton */}
                <View style={stylesIn.checkboxContainer}>
                    <Switch value={isSwitchText} onValueChange={onToggleSwitch} />
                    {isSwitchText && <Text style={stylesIn.TextCheckbox}>בהקלטה</Text>}
                    {!isSwitchText && <Text style={stylesIn.TextCheckbox}>בכתב</Text>}
                </View>
                <Text style={stylesIn.greyText}>*ציטוט בכתב יונפש עם דגימת קול אוטומטית</Text>

                {/* quote */}
                {checkedVoiceOrText === 'quote' && (
                    <View style={stylesIn.TextInputContainer}>
                        <TextInput
                            placeholder="הוסף ציטוט"
                            direction="rtl"
                            multiline={true}
                            style={[stylesIn.input, stylesIn.inputBig]}
                            onChangeText={setTextQuote}
                            value={textQuote}
                        />
                    </View>
                )}
                {/* origin */}
                <View style={stylesIn.TextInputContainer}>
                    <TextInput
                        placeholder={'הוסף מקור'}
                        direction="rtl"
                        style={stylesIn.input}
                        onChangeText={setTextOrigin}
                        value={textOrigin}
                    />
                </View>
                <Text style={stylesIn.greyText}>
                    *יש להוסיף פה את מקור הציטוט: לינק לאתר / שם הספר ועמוד
                </Text>

                {checkedVoiceOrText === 'quote' && (
                    <View style={stylesIn.checkboxContainer}>
                        <Switch value={isSwitchMale} onValueChange={onToggleSwitchMale} />
                        {isSwitchMale && <Text style={stylesIn.TextCheckbox}>קול של גבר</Text>}
                        {!isSwitchMale && <Text style={stylesIn.TextCheckbox}>קול של אישה</Text>}
                    </View>
                )}
                {/* sound sample */}
                {checkedVoiceOrText === 'voice' && (
                    <Fragment>
                        <TouchableOpacity onPress={pickAudio}>
                            <View style={stylesIn.TextInputContainer}>
                                <Text
                                    style={[
                                        stylesIn.input,
                                        stylesIn.inputSound,
                                        styles.textDirectionRTL,
                                    ]}
                                >
                                    <UploadIcon />
                                    {recordingFileName !== ''
                                        ? recordingFileName
                                        : 'העלה הקלטת ציטוט'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={stylesIn.greyText}>
                            *יש להקליט את הציטוט בקול ברור ובמקום שקט ולהעלות כקובץ
                        </Text>
                    </Fragment>
                )}
                {/* end sound */}
                {/* send btn */}
            </ScrollView>

            <View style={stylesIn.ProgressBarContainer}>
                {/* note that the progress is reversed */}
                <ProgressBar progress={0} color={'#D9D9D9'} style={stylesIn.ProgressBarStyle} />
            </View>

            <View style={stylesIn.footerContainer}>
                <View style={stylesIn.send}>
                    <NextButton loading={loading} title={'שליחה'} onPress={handleSend} />
                </View>
                <Text style={stylesIn.headText}>שלב 2 מתוך 2</Text>
                <View style={stylesIn.send}>
                    <NextButton
                        loading={loading}
                        title="הקודם"
                        onPress={() => {
                            navigation.navigate('DIDPageB', figure.tags);
                        }}
                    />
                </View>
            </View>
        </Provider>
        // end of sound
    );
};

export default DIDPageC;

const stylesIn = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    checkboxContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    // nextText: {
    //     opacity: 0,
    // },
    headText: {
        fontSize: 16,
    },
    ProgressBarContainer: {
        marginTop: 5,
        width: '90%',
        display: 'flex',
        marginLeft: '5%',
    },
    ProgressBarStyle: {
        height: 8,
        backgroundColor: '#ADBCF2',
    },
    HeadSection: {
        padding: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // plusContainer: {
    //     fontSize: 24,
    //     backgroundColor: '#FCBF49',
    //     width: 67,
    //     height: 67,
    //     borderRadius: 67,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // shadow
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 0,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //
    //     elevation: 5,
    // },
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
        paddingHorizontal: 15,
    },
    TextCheckbox: {
        alignSelf: 'center',
        paddingLeft: 22,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        fontSize: 18,
        textAlign: 'right',
    },
    inputBig: {
        height: 280,
        textAlignVertical: 'top',
    },
    inputSound: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    send: {
        width: 100,
        marginLeft: 15,
        marginTop: 5,
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
});
