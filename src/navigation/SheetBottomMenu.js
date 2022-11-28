import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'

const MenuData = [{ id: "1", title: 'הדרכה עצמית' }, { id: "2", title: 'הכנת טקס' }, { id: "3", title: 'זיכרון משפחתי' }, { id: "4", title: 'יומן אישי' },]

const SheetBottomMenu = ({ closeSheet }) => {

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={closeSheet}>
      <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.contentContainer}>
      <FlatList
        data={MenuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // backgroundColor:"black" 
  },
  
  itemContainer: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    flex: 1,
    alignItems: 'center',
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default SheetBottomMenu

