import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, SafeAreaView, ScrollView } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker';

import PrevButton from '../../../components/PrevButton'
import NextButton from '../../../components/NextButton'


const Page1 = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'יאנוש קורצק', value: 'one' },
    { label: 'כדורגל בשואה', value: 'two' },
    { label: 'משפט אייכמן', value: 'three' },
    { label: 'מרד גטו וארשה', value: 'four' }
  ]);

  const [text, setText] = useState("")

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <View style={styles.DropContainer}>
          <DropDownPicker
            placeholder="נושא:"
            rtl={true}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={(value) => {
              console.log("Chosen val is:", value);
            }}
            dropDownContainerStyle={{
              backgroundColor: "#f5f5f5"
            }}
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
        <View style={styles.TextContainer}>
          <Text style={[styles.TextOne, { marginBottom: 20 }]}>
            עזרים הדרכה
          </Text>
        </View>
        {/* placeholder for עזרים הדרכה */}
        <View style={{ flexDirection: "row ", marginBottom: 50 }}>
          <View style={{ height: 50, backgroundColor: "#143866", marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
            <Text style={{color:"#fff"}} >placeholder</Text>
          </View>
          <View style={{ height: 50, backgroundColor: "#143866", marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
            <Text style={{color:"#fff"}} >placeholder</Text>
          </View>
          <View style={{ height: 50, backgroundColor: "#143866", marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
            <Text style={{color:"#fff"}} >placeholder</Text>
          </View>
        </View>
        {/*end of  placeholder for עזרים הדרכה */}

        <View style={styles.ButtonContainer}>

          <View style={{ width: 100 }}>
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

          <View style={{ width: 100 }}>
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

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center",
    // marginTop: 15,
    paddingTop: 15,
    backgroundColor: "#FFFF"
  },
  DropContainer: {
    width: "90%",
    // marginBottom: 20,
    zIndex: 100,
  },
  DropDownLine: {
    backgroundColor: "#f5f5f5",
    marginBottom: 20,
  },
  TextContainer: {
    width: "90%",
    flexDirection: "row",
    // alignItems: "end",
    justifyContent: "right"
  },
  TextOne: {
    fontSize: 16,
  },
  TextTwo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#072F5F",
    marginBottom: 15,
  },
  textThree: {
    fontSize: 12,
    color: "#8B8787",
    marginBottom: 8,
  },
  TextInputContainer: {
    width: "90%",
  },
  input: {
    height: 280,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 30,
    textAlign: "right",
  },
  ButtonContainer: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

export default Page1