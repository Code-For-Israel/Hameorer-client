import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const DIDPageC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>DIDPageC</Text>
      <Button title="Finish" onPress={() => {}} />
    </View>
  );
};

export default DIDPageC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
