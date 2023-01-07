import {Text, View, StyleSheet, Button} from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import {UploadExcelMainPage} from "./UploadExcelFile/UploadExcelMainPage";
import {useState} from "react";
import {getToken,} from "../hooks/LocalStorage/GetToken";
import {getTokenAccess} from "../hooks/ApiCalls/authentication_provider";

export default function ProfileScreen() {

    const {
        data,
        loading
    } = UseFetchGet('http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/v1/authentication/user/')

    const [parsedData, setParsedData] = useState(null);

    return (

        <View style={styles.container}>
            <UploadExcelMainPage parsedData={parsedData} setParsedData={setParsedData}></UploadExcelMainPage>

            <Text>Profile Screen</Text>

            <Text>{loading ? "Loading data ........." : "Data Loaded!"}</Text>

            <Button title={'click to pull groups and console log them'} onPress={() => console.log(data)}></Button>
            <Button title={'click to get token'} onPress={() => console.log(() => getToken())}></Button>

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
  