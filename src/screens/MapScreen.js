import { Text, View, StyleSheet } from "react-native";
export function MapScreen() {
    return (
      <View style={styles.container}>
        <Text>Map Screen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  