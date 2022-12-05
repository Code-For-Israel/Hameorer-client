import { View, Text, Button } from 'react-native'
import React from 'react'
import PrevButton from '../../../components/PrevButton'
import NextButton from '../../../components/NextButton'


const Page3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 15 }}>
        זה הדף השלישי
      </Text>
      <NextButton
        title="עבור לדף מספר 4 הבא"
        onPress={() => navigation.navigate("Page4")}
      />
    </View>
  )
}

export default Page3