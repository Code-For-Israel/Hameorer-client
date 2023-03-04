import {SafeAreaView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import {styles} from '../../../../styles/PagesStyle';

const Page4 = ({navigation}) => {
    const [text, setText] = useState('');

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                <View style={styles.TextContainer}>
                    <Text style={styles.textThree}>
                        סיכום אישי שלכם את ההדרכה, תובנה שלכם, מסר שלכם לקבוצה
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

                <View style={styles.ButtonContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                console.log('the text is:', text);
                                navigation.navigate('Page5');
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
                                navigation.navigate('Page3');
                            }}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page4;
