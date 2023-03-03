import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const CustomButton = ({ onPress, text, bgColor, fgColor, type = 'PRIMARY', disable = false }) => {
  return (
      <Pressable
          disabled={disable}
          onPress={onPress}
          style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {},
            disable ? { backgroundColor: 'grey' } : {},
          ]}
      >
        <Text style={[styles.text, styles[`text_${type}`], fgColor ? { color: fgColor } : {}]}>
          {text}
        </Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 300,
    padding: 15,
    marginVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
  },

  // container_PRIMARY: {
  //   backgroundColor: '#072F5F',
  // },

  // container_SECONDARY: {
  //   borderColor: '#3B71F3',
  //   borderWidth: 2,
  // },

  // container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  // text_SECONDARY: {
  //   color: '#3B71F3',
  // },

  // text_TERTIARY: {
  //   color: 'gray',
  // },
});

export default CustomButton;
