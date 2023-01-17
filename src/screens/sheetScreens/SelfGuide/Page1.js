import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';

import NextButton from '../../../components/NextButton'
import {styles} from './PagesStyle'
import {MaterialBottomScroll} from "../../../components/materialBottomScroll/MaterialBottomScroll";


const Page1 = ({navigation}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'יאנוש קורצק', value: 'one'},
        {label: 'כדורגל בשואה', value: 'two'},
        {label: 'משפט אייכמן', value: 'three'},
        {label: 'מרד גטו וארשה', value: 'four'}
    ]);

    const [text, setText] = useState("")

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
                        placeholderStyle={{textAlign: "right"}}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        listItemLabelStyle={{textAlign: "right"}}
                        dropDownContainerStyle={{backgroundColor: '#f5f5f5'}}
                        style={styles.DropDownLine}
                    />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextOne}>
                        שנת האירוע:
                    </Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextTwo}>
                        פתיחה
                    </Text>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.textThree}>
                        הסבירו על הנושא שבחרתם במילים שלכם ומדוע בחרתם בו?
                    </Text>
                </View>
                <View style={styles.TextInputContainer}>
                    <TextInput
                        placeholder='הסבירו על הנושא'
                        direction='rtl'
                        multiline={true}
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                    />
                </View>

                <MaterialBottomScroll></MaterialBottomScroll>


                <View style={styles.ButtonContainer}>
                    <View style={{width: 100}}>
                        <NextButton
                            title="הבא"
                            onPress={() => {
                                console.log("the sub is: ", value)
                                console.log("the text is:", text)
                                navigation.navigate("Page2")
                            }}
                        />
                    </View>

                    <View>
                        <Text>
                            שלב 1 מתוך 5
                        </Text>
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
    )
}

export default Page1