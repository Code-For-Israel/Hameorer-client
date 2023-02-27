import { SafeAreaView, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import PrevButton from '../../../../components/PrevButton';
import NextButton from '../../../../components/NextButton';
import GreenCircleIcon from '../../../../components/GreenCircleIcon';
import { styles } from '../../../../styles/PagesStyle';
import { MaterialBottomScroll } from '../../../../components/materialBottomScroll/MaterialBottomScroll';

const Page3 = ({ navigation }) => {
  const [text, setText] = useState('');
  const [text2] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <View style={styles.TextContainer}>
          <Text style={styles.textThree}>
            מתוך ביקורת המציאות, בקשת עמדה ערכית ביחס לפעולה של דמות או ציבור בסיטואציה
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
        <View style={styles.StatusContainer}>
          <Text style={styles.TextStatus}>מאושר</Text>
          <GreenCircleIcon />
        </View>

        <MaterialBottomScroll></MaterialBottomScroll>

        <View style={styles.ButtonContainer}>
          <View style={{ width: 100 }}>
            <NextButton
              title="הבא"
              onPress={() => {
                console.log('the text is:', text);
                console.log('the text2 is:', text2);
                navigation.navigate('Page4');
              }}
            />
          </View>

          <View>
            <Text>שלב 3 מתוך 5</Text>
          </View>

          <View style={{ width: 100 }}>
            <PrevButton
              title="הקודם"
              onPress={() => {
                navigation.navigate('Page2');
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Page3;
