import {Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-native-paper';
import UseFetchGet from '../../../hooks/ApiCalls/useFetchGet';
import GetSiteUrl from '../../../utils/GetSiteUrl';
import {styles} from '../../../styles/PagesStyle';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {StudentViewPagePolinActivity} from "./StudentViewPagePolinActivity";

const width = Dimensions.get('window').width; //full width

const ViewTaskPolinActivity = ({route}) => {
    const navigation = useNavigation();
    const [storyUrl, setStoryUrl] = useState();
    const [storyData, setStoryData] = useState();
    const id = route.params;
    console.log("im inside")
    console.log(id)
    const baseUrl = GetSiteUrl();
    let {data} = UseFetchGet(storyUrl);
    const isFocused = useIsFocused();
    const [text1, setText1] = useState('');
    const [adminText1, setAdminText1] = useState('');
    const [text2, setText2] = useState('');
    const [adminText2, setAdminText2] = useState('');
    const [text3, setText3] = useState('');
    const [adminText3, setAdminText3] = useState('');
    const [text4, setText4] = useState('');
    const [adminText4, setAdminText4] = useState('');
    const [text5, setText5] = useState('');
    const [adminText5, setAdminText5] = useState('');

    useEffect(() => {
        if (data) {
            setStoryData(data);
            setText1(data.body?.textPage1)
            setAdminText2(data.comments?.textPage2Admin)
            setText2(data.body?.textPage2)
            setAdminText3(data.comments?.textPage3Admin)
            setText3(data.body?.textPage3)
            setAdminText4(data.comments?.textPage4Admin)
            setText4(data.body?.textPage4)
            setAdminText5(data.comments?.youtubeLinkAdmin)
            setText5(data.body?.youtubeLink)
            setAdminText1(data.comments?.textPage1Admin)
            setText1(data.body?.textPage1)
            setAdminText1(data.comments?.textPage1Admin)
            setText1(data.body?.textPage1)
            setAdminText1(data.comments?.textPage1Admin)
        }
    }, [data]);

    useEffect(() => {
        if (id && isFocused) {
            setStoryUrl(baseUrl + 'v1/stories/' + id);
        }
    }, [id, isFocused, baseUrl]);

    const HandelSend = () => {
        setStoryData({});
        navigation.navigate('Profile');
    };
    console.log(storyData)
    return (
        storyData &&
        storyData.body && (
            <Provider>
                <ScrollView style={stylesIn.container}>

                    <View style={{width: '100%'}}>
                        <View style={[stylesIn.TextContainerFull, {marginTop: 20, justifyContent: 'center'}]}>
                            <Text style={stylesIn.TextSubtitle}>{storyData?.subject.subject}</Text>
                        </View>
                        <View style={[stylesIn.TextContainerFull, {justifyContent: 'center'}]}>
                            <Text style={stylesIn.TextOne}>שנת האירוע: {"1943"}</Text>
                        </View>
                    </View>
                    {StudentViewPagePolinActivity(setText1, text1, 'פתיחה', 'הסבירו על הנושא שבחרתם במילים שלכם ומדוע בחרתם בו?', adminText1)}
                    {StudentViewPagePolinActivity(setText2, text2, '?ספרו במילים שלכם על הנושא שבחרתם ולמה', 'הוסיפו מידע היסטורי כמו מקומות וזמנים, כתבו במילים שלכם.', adminText2)}
                    {StudentViewPagePolinActivity(setText3, text3, 'שאלה / דילמה ערכית מהותית', 'מתוך ביקורת המציאות, בקשת עמדה ערכית ביחס לפעולה של דמות או ציבור בסיטואציה.', adminText3)}
                    {StudentViewPagePolinActivity(setText4, text4, 'סיכום', 'סיכום אישי שלכם את ההדרכה, תובנה שלכם, מסר שלכם לקבוצה. ', adminText4)}
                    {StudentViewPagePolinActivity(setText5, text5, 'Youtube', 'Youtube Link', adminText5)}

                    {storyData.status !== 'done' &&
                        // todo send button after edit
                        <Text style={styles.cardComponentTextWhite}>Send button while status is not Done</Text>
                    }
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

export default ViewTaskPolinActivity;

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
    TextSubtitle: {
        fontStyle: "normal",
        // fontWeight: "bold",
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'right',
        color: '#3E5991'
    },
    pageContainer: {
        flex: 1,
        alignItems: "center",
        // marginTop: 15,
        paddingTop: 15,
        backgroundColor: "#FFFF",
    },
    DropContainer: {
        width: "90%",
        // marginBottom: 20,
        zIndex: 100,
    },
    DropDownLine: {
        backgroundColor: "#f5f5f5",
        marginBottom: 20,
    },
    TextContainer: {
        width: "90%",
        flexDirection: "row",
        // alignItems: "end",
        justifyContent: "flex-end",
    }, TextContainerFull: {
        flexDirection: "row",
        // alignItems: "end",
        justifyContent: "flex-end",
    },
    TextOne: {
        fontSize: 16,
    },
    TextTwo: {
        fontSize: 22,
        // fontWeight: "bold",
        color: "#072F5F",
        marginBottom: 15,
    },
    textThree: {
        fontSize: 12,
        color: "#8B8787",
        marginBottom: 8,
    },
    input2: {
        width: "100%",
        padding: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 10,
        marginBottom: 30,
        textAlign: "right",
    },
    ButtonContainer: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // position: "absolute",
        // bottom: 12
    },
    TextStatus: {
        fontSize: 24,
        // fontWeight: "bold",
        marginLeft: 20,
    },
    StatusContainer: {
        width: "90%",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
    },
});
