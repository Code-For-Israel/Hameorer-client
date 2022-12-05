import { View, Text, Button } from 'react-native'
import React from 'react'


const Page4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 15 }}>
        This is the FOURTH page
      </Text>
      <Button
        title="עבור לדף הבא"
        onPress={() => navigation.navigate("Page5")}
      />
    </View>
  )
}

export default Page4