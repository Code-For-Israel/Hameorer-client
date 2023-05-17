import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import {useDispatch, useSelector} from 'react-redux';
import {selectAccess} from '../../../../redux/userSlice';
import {updateStory} from '../../../../redux/dataSlice';
import {useNavigation} from '@react-navigation/native';
import ImageViewer from "../../../../components/ImageViewer";
import PlaceholderImage from "../../../../../assets/fallbackImage.png";

const Page5 = ({route}) => {
    const navigation = useNavigation();
    const [youtubeLinkAdmin, setYoutubeLinkAdmin] = useState('');
    const {textPage1Admin, textPage2Admin, textPage3Admin, textPage4Admin} = route.params;
    const {selectedSub} = route.params;
    const media = (selectedSub?.media)
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);
    const [imageList, setImageList] = useState('');

    useEffect(() => {
        if (media) {

            const mappedArray = Object.entries(media).map(([key, value]) => {
                return value;
            });

            setImageList(mappedArray)
        }
    }, [media]);

    const handleSend = () => {
        const story = {
            subject: selectedSub.subject, tags: ['_'], body: selectedSub.body, comments: {
                textPage1Admin: textPage1Admin,
                textPage2Admin: textPage2Admin,
                textPage3Admin: textPage3Admin,
                textPage4Admin: textPage4Admin,
                youtubeLink: youtubeLinkAdmin,
            }, status: 'review',
        };
        const id = selectedSub._id;
        dispatch(updateStory({access, story: story, id}));
        navigation.navigate('MyGroupSummary');
    };

    return (<ScrollView style={{flexDirection: 'column'}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.pageContainer}>

                    <ScrollView horizontal={true}>
                        {imageList && imageList.map((img) => (<View style={[styles.container, {flexDirection: 'row'}]}>
                                <View style={stylesIn.ImageContainer}>
                                    {/* <Icon name="add" size={30} color={"#fff"} /> */}
                                    <ImageViewer
                                        placeholderImageSource={PlaceholderImage}
                                        selectedImage={img}
                                        width={100}
                                    />
                                </View>
                            </View>))}
                    </ScrollView>

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
                                title="שלח משוב"
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
        </ScrollView>);
};
export default Page5;

const stylesIn = StyleSheet.create({
    ImageContainer: {
        // flex: 1,
        // padding: 1,
        borderRadius: 65, shadowColor: '#000000', shadowOffset: {
            width: 0, height: 3,
        }, shadowOpacity: 0.17, shadowRadius: 3.05, elevation: 4, marginHorizontal: 10
    },
})