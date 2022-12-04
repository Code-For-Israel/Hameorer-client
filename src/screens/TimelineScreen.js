import { Text, View, StyleSheet } from "react-native";
export function TimelineScreen() {
    return (
      <View style={styles.container}>
        <Text>Timeline Screen</Text>
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
  