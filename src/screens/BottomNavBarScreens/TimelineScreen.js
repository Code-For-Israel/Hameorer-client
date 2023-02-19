import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const TimelineScreen = () => {
    return (<View style={styles.container}>
        <Text>מסך של ציר הזמן</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }
})

export default TimelineScreen