import {ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import {MaterialBottomScroll} from '../../../../components/materialBottomScroll/MaterialBottomScroll';
import {PageTop} from './PageTop';

const Page3 = ({route, navigation}) => {
    const [text, setText] = useState('');
    const {textPage1, textPage2} = route.params;
    const {selectedSub} = route.params;

    return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                {PageTop(
                    setText,
                    text,
                    selectedSub.subject,
                    '1943',
                    'שאלה / דילמה ערכית מהותית',
                    'מתוך ביקורת המציאות, בקשת עמדה ערכית ביחס לפעולה של דמות או ציבור בסיטואציה.',
                )}

                <MaterialBottomScroll></MaterialBottomScroll>

                <View style={styles.ButtonContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                navigation.navigate('Page4', {
                                    selectedSub: selectedSub,
                                    textPage1: textPage1,
                                    textPage2: textPage2,
                                    textPage3: text,
                                });
                            }}
                        />
                    </View>

                    <View>
                        <Text>שלב 3 מתוך 5</Text>
                    </View>

                    <View style={{width: 100}}>
                        <PrevButton
                            title="הקודם"
                            onPress={() => {
                                navigation.navigate('Page2', {
                                    selectedSub: selectedSub,
                                    textPage1: textPage1,
                                    textPage2: text,
                                });
                            }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Page3;
