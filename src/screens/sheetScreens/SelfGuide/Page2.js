import { View, Text, Button } from 'react-native'
import React from 'react'


const Page2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 15 }}>
        This is the SECOND page
      </Text>
      <Button
        title="עבור לדף הבא"
        onPress={() => navigation.navigate("Page3")}
      />
    </View>
  )
}

export default Page2