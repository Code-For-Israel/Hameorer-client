import { View, Text, Button } from 'react-native'
import React from 'react'


const Page3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 15 }}>
        זה הדף השלישי
      </Text>
      <Button
        title="עבור לדף מספר 4 הבא"
        onPress={() => navigation.navigate("Page4")}
      />
    </View>
  )
}

export default Page3