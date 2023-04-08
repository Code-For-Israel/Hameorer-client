import {SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';

//placeholder
import TEMP_AddPhoto from '../../../../components/PhotoUpload';
import PhotoUpload from "../../../../components/PhotoUpload";

const Page4 = ({route, navigation}) => {
    const [youtubeLink, setYoutubeLink] = useState('');
    const {textPage1, textPage2, textPage3, textPage4} = route.params;

    console.log(textPage1, textPage2, textPage3, textPage4)

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                <View style={styles.TextContainer}>
                    <Text style={styles.textThree}>*הוסף עד 5 תמונות *קבצי jpg,png (עד 2 מגה)</Text>
                </View>
                <PhotoUpload/>
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
                <View style={styles.ButtonContainer}>
                    <View style={{width: 130}}>
                        <NextButton
                            title="שלח למדריך"
                            onPress={() => {
                                console.log({textPage1, textPage2, textPage3, textPage4, youtubeLink});
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
                                navigation.navigate('Page4');
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default Page4;
