import {SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import {PageTop} from "./PageTop";

const Page4 = ({route, navigation}) => {
    const [text, setText] = useState('');
    const {textPage1, textPage2, textPage3} = route.params;
    const {selectedSub} = route.params;

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                {PageTop(setText, text, selectedSub.subject, '1943', 'סיכום', 'סיכום אישי שלכם את ההדרכה, תובנה שלכם, מסר שלכם לקבוצה. ')}

                <View style={styles.ButtonContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                navigation.navigate('Page5', {
                                    selectedSub: selectedSub,
                                    textPage1: textPage1, textPage2: textPage2, textPage3: textPage3, textPage4: text
                                });
                            }}
                        />
                    </View>

                    <View>
                        <Text>שלב 4 מתוך 5</Text>
                    </View>

                    <View style={{width: 100}}>
                        <PrevButton
                            title="הקודם"
                            onPress={() => {
                                navigation.navigate('Page3', {
                                    selectedSub: selectedSub,
                                    textPage1: textPage1, textPage2: textPage2, textPage3: textPage3
                                });
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page4;
