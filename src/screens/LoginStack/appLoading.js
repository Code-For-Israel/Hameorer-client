import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const image = require("../../../assets/favicon.png");


const appLoading = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={image} style={styles.image}>
      </ImageBackground>
    </View>
  )
}

export default appLoading

const styles = StyleSheet.create({
  image: {
    flex: 1,
    
    resizeMode: "cover",
  },
})




