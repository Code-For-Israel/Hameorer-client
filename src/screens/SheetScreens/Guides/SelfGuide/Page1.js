import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import {PageTop} from './PageTop';
import {useNavigation} from '@react-navigation/native';

const Page1 = ({route}) => {
    const navigation = useNavigation();
    const selectedPolinActivity = route.params;
    const selectedSub = selectedPolinActivity.story;

    const pageText = selectedSub.body.textPage1;
    const [text, setText] = useState(selectedSub.comments.textPage1Admin);

    return (
        <ScrollView style={{flexDirection: 'column'}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.pageContainer}>
                    {PageTop(
                        setText,
                        text,
                        selectedSub?.subject?.subject,
                        '1943',
                        'פתיחה',
                        'הסבירו על הנושא שבחרתם במילים שלכם ומדוע בחרתם בו?',
                        pageText,
                    )}

                    <View style={styles.ButtonContainer}>
                        <View style={{width: 100}}>
                            <NextButton
                                title="הבא"
                                onPress={() => {
                                    navigation.navigate('Page2', {
                                        textPage1Admin: text,
                                        selectedSub: selectedSub,
                                    });
                                }}
                            />
                        </View>

                        <View>
                            <Text>שלב 1 מתוך 5</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Page1;
