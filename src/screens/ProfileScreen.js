import {Text, View, StyleSheet, Button} from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";

export default function ProfileScreen() {

    const {
        data,
        loading
    } = UseFetchGet('http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/v1/authentication/user/')

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <br/>
            <Text>{loading ? "Loading data ........." : "Data Loaded!"}</Text>
            <br/>
            <Button title={'click to pull groups'} onPress={() => console.log(data)}></Button>
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
  