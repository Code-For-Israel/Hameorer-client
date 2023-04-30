import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import {PageTop} from './PageTop';
import {useNavigation} from '@react-navigation/native';

const Page3 = ({route}) => {
    const navigation = useNavigation();

    const {textPage1Admin, textPage2Admin} = route.params;
    const {selectedSub} = route.params;
    const pageText = selectedSub.body.textPage2;
    const [text, setText] = useState(selectedSub.comments.textPage3Admin);

    return (
        <ScrollView style={{flexDirection: 'column'}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.pageContainer}>
                    {PageTop(
                        setText,
                        text,
                        selectedSub.subject?.subject,
                        '1943',
                        'שאלה / דילמה ערכית מהותית',
                        'מתוך ביקורת המציאות, בקשת עמדה ערכית ביחס לפעולה של דמות או ציבור בסיטואציה.',
                        pageText,
                    )}

                    <View style={styles.ButtonContainer}>
                        <View style={{width: 100}}>
                            <NextButton
                                title="הבא"
                                onPress={() => {
                                    navigation.navigate('Page4', {
                                        selectedSub: selectedSub,
                                        textPage1Admin: textPage1Admin,
                                        textPage2Admin: textPage2Admin,
                                        textPage3Admin: text,
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
                                        textPage1Admin: textPage1Admin,
                                        textPage2Admin: text,
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

export default Page3;
