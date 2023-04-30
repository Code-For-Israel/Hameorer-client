import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import PhotoUpload from '../../../../components/PhotoUpload';
import {useDispatch, useSelector} from 'react-redux';
import {selectAccess} from '../../../../redux/userSlice';
import {updateStory} from '../../../../redux/dataSlice';
import {useNavigation} from '@react-navigation/native';

const Page5 = ({route}) => {
    const navigation = useNavigation();
    const [youtubeLinkAdmin, setYoutubeLinkAdmin] = useState('');
    const {textPage1Admin, textPage2Admin, textPage3Admin, textPage4Admin} = route.params;
    const {selectedSub} = route.params;
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);

    const handleSend = () => {
        console.log('sending..');
        const story = {
            subject: selectedSub.subject,
            tags: ['_'],
            body: selectedSub.body,
            comments: {
                textPage1Admin: textPage1Admin,
                textPage2Admin: textPage2Admin,
                textPage3Admin: textPage3Admin,
                textPage4Admin: textPage4Admin,
                youtubeLink: youtubeLinkAdmin,
            },
            status: 'review',
        };
        const id = selectedSub._id;
        dispatch(updateStory({access, story: story, id}));
        navigation.navigate('MyGroupSummary');
    };

    return (
        <ScrollView style={{flexDirection: 'column'}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.pageContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.textThree}>
                            *הוסף עד 5 תמונות *קבצי jpg,png (עד 2 מגה)
                        </Text>
                    </View>
                    <PhotoUpload />
                    <View style={styles.TextContainer}>
                        <Text style={styles.TextOne}>הוסף לינק ליו-טיוב</Text>
                    </View>
                    <View style={styles.TextInputContainer}>
                        <TextInput
                            placeholder=""
                            direction="rtl"
                            multiline={true}
                            style={styles.input2}
                            value={selectedSub.body.youtubeLink}
                            editable={false}
                        />
                    </View>
                    <View style={styles.TextInputContainer}>
                        <TextInput
                            placeholder=""
                            direction="rtl"
                            multiline={true}
                            style={styles.input2}
                            onChangeText={setYoutubeLinkAdmin}
                            value={youtubeLinkAdmin}
                        />
                    </View>
                    <View style={styles.ButtonContainer}>
                        <View style={{width: 130}}>
                            <NextButton
                                title="שלח למדריך"
                                onPress={() => {
                                    handleSend();
                                }}
                            />
                        </View>
                        <View>
                            <Text>שלב 5 מתוך 5</Text>
                        </View>
                        <View style={{width: 100}}>
                            <PrevButton
                                title="הקודם"
                                onPress={() => {
                                    navigation.navigate('Page4', {
                                        selectedSub: selectedSub,
                                        textPage1Admin: textPage1Admin,
                                        textPage2Admin: textPage2Admin,
                                        textPage3Admin: textPage3Admin,
                                        textPage4Admin: textPage4Admin,
                                    });
                                }}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};
export default Page5;
