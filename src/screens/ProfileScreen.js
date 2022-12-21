import {Text, View, StyleSheet, Button} from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import {getTokenAccess} from "../hooks/ApiCalls/authentication_provider";

export default function ProfileScreen() {

    const {
        data,
        loading
    } = UseFetchGet('http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/v1/authentication/user/')

    const token = getTokenAccess();

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <br/>
            <Text>{loading ? "Loading data ........." : "Data Loaded!"}</Text>
            <br/>
            <Button title={'click to pull groups'} onPress={() => console.log(data)}></Button>
            {data ? (
                <>
                    {data.map(user => {
                        return (<div key={user.uuid}>{user.firstname +' - '+ user.lastname}</div>)
                    })}
                </>
            ) : (<> no data</>)}
            <br/>
            <Button title={'click to get token groups'} onPress={() => console.log(token)}></Button>
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
  