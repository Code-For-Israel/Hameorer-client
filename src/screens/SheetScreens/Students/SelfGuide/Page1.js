import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import {MaterialBottomScroll} from '../../../../components/materialBottomScroll/MaterialBottomScroll';
import {PageTop} from './PageTop';
import {useNavigation} from '@react-navigation/native';

const Page1 = ({route}) => {
    const navigation = useNavigation();

    const selectedSub = route.params;
    console.log(selectedSub);
    const dateEvent = 1943;
    const B = (props) => <Text>{props.children}</Text>;

    const [text, setText] = useState('');

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                {PageTop(
                    setText,
                    text,
                    selectedSub?.subject,
                    '1943',
                    'פתיחה',
                    'הסבירו על הנושא שבחרתם במילים שלכם ומדוע בחרתם בו?',
                )}

                <MaterialBottomScroll></MaterialBottomScroll>

                <View style={styles.ButtonContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                navigation.navigate('Page2', {
                                    textPage1: text,
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
    );
};

export default Page1;
