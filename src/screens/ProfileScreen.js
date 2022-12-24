import {Text, View, StyleSheet, Button} from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import {getTokenAccess} from "../hooks/ApiCalls/authentication_provider";
import {UploadExcelMainPage} from "./UploadExcelFile/UploadExcelMainPage";
import {useState, useEffect} from "react";

export default function ProfileScreen() {

    const {
        data,
        loading
    } = UseFetchGet('http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/v1/authentication/user/')

    const token = getTokenAccess();
    const [parsedData, setParsedData] = useState(null);

    useEffect(() => {
        if (parsedData !== null) {
            console.log(parsedData)
        }
    }, [parsedData]);

    return (
        <View style={styles.container}>
            <UploadExcelMainPage parsedData={parsedData} setParsedData={setParsedData}></UploadExcelMainPage>

            <Text>Profile Screen</Text>
            <br/>
            <Text>{loading ? "Loading data ........." : "Data Loaded!"}</Text>
            <br/>
            <Button title={'click to pull groups and console log them'} onPress={() => console.log(data)}></Button>

            {parsedData && parsedData.users && parsedData.users.length >= 1 ? (
                <>
                    <h1>Items from excel</h1>
                    {parsedData.users.map(user => {
                        return (
                            <div key={user.email}>{user.firstname + ' - ' + user.lastname + ' - ' + user.email}</div>)
                    })}
                </>
            ) : (<> no data </>)}
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
  