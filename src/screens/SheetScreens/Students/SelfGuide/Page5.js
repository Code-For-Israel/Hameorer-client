import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import PhotoUpload from '../../../../components/PhotoUpload';
import {setStory} from '../../../../redux/dataSlice';
import {useDispatch, useSelector} from 'react-redux';
import {selectAccess} from '../../../../redux/userSlice';
import GetSiteUrl from "../../../../utils/GetSiteUrl";

const Page5 = ({route, navigation}) => {
    const [youtubeLink, setYoutubeLink] = useState('');
    const {textPage1, textPage2, textPage3, textPage4} = route.params;
    const {selectedSub} = route.params;
    const dispatch = useDispatch();
    const access = useSelector(selectAccess);
    const [imageList, setImageList] = useState([]);
    const [respondsList, setRespondsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const bucket = 'hameorer-img';
    const baseUrl = GetSiteUrl();

    const upload = async () => {
        setRespondsList([]);
        setLoading(true)
        let formData = new FormData();
        if (imageList && imageList.length > 0) {
            const uploadPromises = imageList.map(async (img) => {
                formData.append('type', img.mimeType);
                formData.append('file', {
                    uri: img.uri,
                    name: img.name,
                    type: img.mimeType,
                });

                const response = await fetch(`${baseUrl}v1/media/${bucket}/${img.name}/`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                    body: formData,
                });

                return response.json();
            });

            const responses = await Promise.all(uploadPromises);

            await setRespondsList([...respondsList, ...responses]);

            handleSend(responses);
        }
    };

    const handleSend = (responses) => {
        const links = responses.flatMap((response) =>response["http_link"]);
        const mediaImages = {}
        for (let i = 0; i < links.length; i++) {
            const key = "image" + (i + 1);
            mediaImages[key] = links[i];
        }
        const story = {
            subject: selectedSub,
            tags: ['_'],
            media: mediaImages,
            body: {
                textPage1: textPage1,
                textPage2: textPage2,
                textPage3: textPage3,
                textPage4: textPage4,
                youtubeLink: youtubeLink,
            },
            comments: {
                textPage1Admin: '',
                textPage2Admin: '',
                textPage3Admin: '',
                textPage4Admin: '',
                youtubeLinkAdmin: '',
            },
            status: 'pending',
        };

        dispatch(setStory({access, story}));
        setLoading(false)
        navigation.navigate('Profile');
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                <View style={styles.TextContainer}>
                    <Text style={styles.textThree}>*הוסף עד 5 תמונות *קבצי jpg,png (עד 2 מגה)</Text>
                </View>
                <PhotoUpload imageList={imageList} setImageList={setImageList} respondsList={respondsList}
                             setRespondsList={setRespondsList}/>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextOne}>הוסף לינק ליו-טיוב</Text>
                </View>
                <View style={styles.TextInputContainer}>
                    <TextInput
                        placeholder=""
                        direction="rtl"
                        multiline={true}
                        style={styles.input2}
                        onChangeText={setYoutubeLink}
                        value={youtubeLink}
                    />
                </View>
                <View style={stylesIn.ButtonContainer}>
                    <View style={{width: 130}}>
                        <NextButton
                            title="שלח למדריך"
                            onPress={() => {
                                upload();
                            }}
                            loading={loading}
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
                                    textPage1: textPage1,
                                    textPage2: textPage2,
                                    textPage3: textPage3,
                                    textPage4: textPage4,
                                });
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};


export default Page5;

const stylesIn = StyleSheet.create({
    ButtonContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
})