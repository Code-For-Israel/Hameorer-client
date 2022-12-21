import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const DIDPageA = ({ navigation }) => {
  return (
    <View style={ styles.container }>
    <Text style={{marginBottom: 15}}>DIDPageA</Text>

    <Button 
    title='go to next page -> DID page B'
    onPress={() => navigation.navigate("DIDPageB")}/>

    </View>
  )
}

export default DIDPageA

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})