import {StyleSheet, Text, View} from "react-native";

export default function MapScreen() {
    return (<View style={styles.container}>
        <Text>מסך מפה</Text>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: "center", alignItems: "center",
    },
});
  