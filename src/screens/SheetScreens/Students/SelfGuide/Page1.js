import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

import NextButton from '../../../../components/NextButton';
import {styles} from './PagesStyles';
import {MaterialBottomScroll} from '../../../../components/materialBottomScroll/MaterialBottomScroll';
import {PageTop} from "./PageTop";


const Page1 = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('one');
    const [items, setItems] = useState([
        {label: 'יאנוש קורצק', value: 'one'},
        {label: 'כדורגל בשואה', value: 'two'},
        {label: 'משפט אייכמן', value: 'three'},
        {label: 'מרד גטו וארשה', value: 'four'},
    ]);
    const dateEvent = 1943
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;

    const [text, setText] = useState('');

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.pageContainer}>
                <View style={styles.DropContainer}>
                    <DropDownPicker
                        onChangeValue={(value) => {
                            console.log('Chosen val is:', value);
                        }}
                        rtl={true}
                        placeholder="נושא:"
                        placeholderStyle={{textAlign: 'right'}}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listItemLabelStyle={{textAlign: 'right'}}
                        dropDownContainerStyle={{backgroundColor: '#f5f5f5'}}
                        style={styles.DropDownLine}
                    />
                </View>

                {PageTop(setText, text, 'מרד גטו ורשה', '1943', 'פתיחה', 'הסבירו על הנושא שבחרתם במילים שלכם ומדוע בחרתם בו?')}

                <MaterialBottomScroll></MaterialBottomScroll>

                <View style={styles.ButtonContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                console.log('the sub is: ', value);
                                console.log('the text is:', text);
                                navigation.navigate('Page2', {textPage1: text});
                            }}
                        />
                    </View>

                    <View>
                        <Text>שלב 1 מתוך 5</Text>
                    </View>

                    <View style={{width: 100}}>
                        {/* <PrevButton
              title="הקודם"
              onPress={() => {
                navigation.navigate("Page1")
              }}
            /> */}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Page1;
