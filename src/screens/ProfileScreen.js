import {Text, View, StyleSheet, Button} from "react-native";
import UseFetchGet from "../hooks/ApiCalls/useFetchGet";
import {UploadExcelMainPage} from "./UploadExcelFile/UploadExcelMainPage";
import {useState} from "react";
import getSiteUrl from "../utils/getSiteUrl";
import {getTokenAccess} from "../hooks/ApiCalls/authentication_provider";

export default function ProfileScreen() {

    const {
        data,
        loading
    } = UseFetchGet(getSiteUrl() + 'v1/authentication/user/')

    const [parsedData, setParsedData] = useState(null);

    // enable this for getting the login
    // const x = getTokenAccess()

    return (

        <View style={styles.container}>
            <UploadExcelMainPage parsedData={parsedData} setParsedData={setParsedData}></UploadExcelMainPage>

            <Text>Profile Screen</Text>

            <Text>{loading ? "Loading data ........." : "Data Loaded!"}</Text>

            <Button title={'click to pull groups and console log them'} onPress={() => console.log(data)}></Button>

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
  