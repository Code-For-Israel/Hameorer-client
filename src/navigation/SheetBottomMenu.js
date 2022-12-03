import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const MenuData = [
  { id: "1", title: 'הדרכה עצמית' },
  { id: "2", title: 'הכנת טקס' },
  { id: "3", title: 'זיכרון משפחתי' },
  { id: "4", title: 'יומן אישי' },
]

const FlatListItemSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#fff",
      }}
    />
  );
}

const SheetBottomMenu = ({ closeSheet }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.title)
          closeSheet()
        }
        }
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <FlatList
      data={MenuData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={FlatListItemSeparator}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: '#B6CEFF',
    padding: 10,
    alignItems: 'center',
    // marginVertical: 2,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default SheetBottomMenu

