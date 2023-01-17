import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyContentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MyContentScreen</Text>
    </View>
  )
}

export default MyContentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})