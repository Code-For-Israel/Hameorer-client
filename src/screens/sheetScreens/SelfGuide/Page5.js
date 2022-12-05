import { View, Text, Button } from 'react-native'
import React from 'react'


const Page5 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 15 }}>
        This is the FIFTH page
      </Text>
      <Button
        title="סיים תהליך"
        // onPress={() => navigation.navigate("Page5")}
      />
    </View>
  )
}

export default Page5