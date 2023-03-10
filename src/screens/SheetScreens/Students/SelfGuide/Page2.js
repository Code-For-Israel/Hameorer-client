import {SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from '../../../../styles/PagesStyle';
import {MaterialBottomScroll} from '../../../../components/materialBottomScroll/MaterialBottomScroll';

const Page2 = ({navigation}) => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                <View style={styles.TextContainer}>
                    <Text style={styles.textThree}>
                        מומלץ להשתמש בעזרים : תמונה, עדות, קטע מעיתון ארכיון, שיר סרט או להכין פעולה
                    </Text>
                </View>
                <View style={styles.TextInputContainer}>
                    <TextInput
                        placeholder="מקום לטקסט"
                        direction="rtl"
                        multiline={true}
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                    />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextTwo}>הערת מדריך</Text>
                </View>
                <View style={styles.TextContainer}>
                    <TextInput
                        placeholder="הערת מדריך"
                        direction="rtl"
                        style={styles.input2}
                        onChangeText={setText2}
                        value={text2}
                    ></TextInput>
                </View>

                <MaterialBottomScroll></MaterialBottomScroll>

                <View style={styles.ButtonContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                console.log('the text is:', text);
                                console.log('the text2 is:', text2);
                                navigation.navigate('Page3');
                            }}
                        />
                    </View>

                    <View>
                        <Text>שלב 2 מתוך 5</Text>
                    </View>

                    <View style={{width: 100}}>
                        <PrevButton
                            title="הקודם"
                            onPress={() => {
                                navigation.navigate('Page1');
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page2;
