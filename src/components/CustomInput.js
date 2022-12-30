import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[styles.contauner, { borderColor: error ? "red" : "white" }]}
          >
            <TextInput
              style={[styles.text]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text
              style={{
                color: "red",
                alignSelf: "center",
                alignContent: "center",
              }}
            >
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    height: 50,
    color: "gray",
    width: "100%",
    padding: 10,
    backgroundColor: "#f8f8ff",
    borderRadius: 10,
    marginBottom: 5,
    textAlign: "center",
    textAlignVertical: "top",
    paddingHorizontal: 5,
    marginVertical: 2,
  },
  contauner: {
    width: "25%",
    marginVertical: 2,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
  },
  input: {
    fontSize: 16,
    fontFamily: "arial",
  },
});

export default CustomInput;
