import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const DIDPageB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 15 }}>DIDPageB</Text>

      <Button
        title="go to next page -> DID page C"
        onPress={() => navigation.navigate("DIDPageC")}
      />
    </View>
  );
};

export default DIDPageB;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
