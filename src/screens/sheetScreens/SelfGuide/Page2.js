import { View, Text, Button, SafeAreaView, StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import PrevButton from '../../../components/PrevButton'
import NextButton from '../../../components/NextButton'

const Page2 = ({ navigation }) => {
  const [text, setText] = useState("")
  const [text2, setText2] = useState("")

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.pageContainer}>
        <View style={styles.TextContainer}>
          <Text style={styles.textThree}>
            מומלץ להשתמש בעזרים : תמונה, עדות, קטע מעיתון ארכיון, שיר סרט או להכין פעולה
          </Text>
        </View>
        <View style={styles.TextInputContainer}>
          <TextInput
            placeholder='מקום לטקסט'
            direction='rtl'
            multiline={true}
            style={styles.input}
            onChangeText={setText}
            value={text}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.TextTwo}>
            הערת מדריך
          </Text>
        </View>
        <View style={styles.TextContainer}>
          <TextInput
            placeholder='הערת מדריך'
            direction='rtl'
            style={styles.input2}
            onChangeText={setText2}
            value={text2}
          >
          </TextInput>
        </View>

        {/* placeholder for עזרים הדרכה */}
        <View style={{ flexDirection: "row ", marginBottom: 50 }}>
          <View style={{ height: 50, backgroundColor: "#143866", marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
            <Text style={{ color: "#fff" }} >placeholder</Text>
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
                console.log("the text is:", text)
                console.log("the text2 is:", text2)
                navigation.navigate("Page3")
              }}
            />
          </View>

          <View>
            <Text>
              שלב 2 מתוך 5
            </Text>
          </View>

          <View style={{ width: 100 }}>
            <PrevButton
              title="הקודם"
              onPress={() => {
                 navigation.navigate("Page1")
               }}
            />
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
  TextContainer: {
    width: "90%",
    flexDirection: "row",
    // alignItems: "end",
    justifyContent: "right"
  },
  textThree: {
    fontSize: 12,
    color: "#8B8787",
    marginBottom: 8,
  },
  TextTwo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#072F5F",
    marginBottom: 15,
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
  input2: {
    width: "100%",
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
export default Page2