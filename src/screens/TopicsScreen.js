import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopicsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>TopicsScreen</Text>
    </View>
  )
}

export default TopicsScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})