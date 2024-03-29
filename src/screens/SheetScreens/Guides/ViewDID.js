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
import {Provider, Switch} from 'react-native-paper';
import PlaceholderImage from '../../../../assets/fallbackImage.png';
import ImageViewer from '../../../components/ImageViewer';
import {styles} from '../../../styles/PagesStyle';
import {updateStory} from '../../../redux/dataSlice';
import {useDispatch, useSelector} from 'react-redux';
import {selectAccess} from '../../../redux/userSlice';
import {useNavigation} from '@react-navigation/native';
import SoundPlayer from '../../../components/SoundPlayer/SoundPlayer';

const width = Dimensions.get('window').width; //full width

const ViewDID = ({route}) => {
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);
    const navigation = useNavigation();

    const [guideNote, setGuideNote] = useState('');
    let disableButton = false;
    const data = route.params?.story;
    const [isSwitchApproved, setIsSwitchApproved] = React.useState(false);

    useEffect(() => {
        if (data && data.comments && data.comments.one) {
            setGuideNote(data.comments.one);
        }
        if (data && data.status === 'done') {
            setIsSwitchApproved(true);
            disableButton = true;
        }
    }, [data]);

    const HandelSend = () => {
        let newData = {comments: {one: ''}, status: ''};
        if (isSwitchApproved) {
            newData.status = 'done';
        } else {
            newData.status = 'review';
            newData.comments.one = guideNote;
        }
        const id = data._id;
        dispatch(updateStory({access, story: newData, id}));
        navigation.navigate('MyGroupFigure');
        // todo block if approved in the past
    };

    const onToggleSwitchApproved = () => {
        setIsSwitchApproved(!isSwitchApproved);
    };

    return (
        route &&
        data && (
            <Provider>
                <ScrollView style={stylesIn.container}>
                    <View style={stylesIn.HeadSection}>
                        <View style={stylesIn.ImageContainer}>
                            {/* <Icon name="add" size={30} color={"#fff"} /> */}
                            <ImageViewer
                                placeholderImageSource={PlaceholderImage}
                                selectedImage={data.media?.image}
                                width={130}
                            />
                        </View>
                        <View style={stylesIn.detailsContainer}>
                            <Text style={[stylesIn.h1, styles.textDirectionRTL]}>
                                {data.subject.subject}
                            </Text>
                            <Text style={[stylesIn.textBody, styles.textDirectionRTL]}>
                                {data.body.quote_location}
                            </Text>

                            <Text style={[stylesIn.textSubTitle, styles.textDirectionRTL]}>
                                תאריך לידה: {route.params.dateBirth}
                            </Text>
                            <Text style={[stylesIn.textSubTitle, styles.textDirectionRTL]}>
                                תאריך פטירה: {route.params.dateDeath}
                            </Text>
                        </View>
                    </View>
                    {/* end of head Section */}

                    {/* quote */}
                    {data?.body?.quote !== '' && (
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
                    <View style={[stylesIn.TextInputContainer, {flexDirection: 'row-reverse'}]}>
                        <TextInput
                            disabled={true}
                            direction="rtl"
                            style={stylesIn.input}
                            value={data.body.quote_source}
                        />
                        {/*<Checkbox.Item label="אישור ציטוט" status={checkedQuote ? 'checked' : 'unchecked'} onPress={() => {*/}
                        {/*    setCheckedQuote(!checkedQuote);*/}
                        {/*}}/>*/}
                    </View>
                    {data.media.soundHttpLink !== 'none' && (
                        <View style={[stylesIn.TextInputContainer, {flexDirection: 'row-reverse'}]}>
                            <SoundPlayer audioMedia={data.media}></SoundPlayer>
                        </View>
                    )}
                    <View
                        style={[
                            stylesIn.TextInputContainer,
                            {flexDirection: 'row-reverse', paddingVertical: 10},
                        ]}
                    >
                        <Switch value={isSwitchApproved} onValueChange={onToggleSwitchApproved} />
                        {isSwitchApproved && <Text style={stylesIn.TextCheckbox}>מאושר</Text>}
                        {!isSwitchApproved && <Text style={stylesIn.TextCheckbox}>לא מאושר</Text>}
                    </View>
                    {/*הערות מדריך*/}
                    <View style={stylesIn.TextInputContainer}>
                        <TextInput
                            placeholder="מקום להערה"
                            multiline={true}
                            onChangeText={setGuideNote}
                            value={guideNote}
                            direction="rtl"
                            style={[stylesIn.input, {height: 150, textAlignVertical: 'top'}]}
                        />
                    </View>
                    {/* send btn */}
                    <TouchableOpacity style={stylesIn.cardComponentButton} onPress={HandelSend}>
                        <Text style={styles.cardComponentTextWhite}>שלח משוב</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Provider>
        )
        // end of sound
    );
};

export default ViewDID;

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
        paddingHorizontal: 15,
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
    TextCheckbox: {
        alignSelf: 'center',
        paddingHorizontal: 10,
    },
});
