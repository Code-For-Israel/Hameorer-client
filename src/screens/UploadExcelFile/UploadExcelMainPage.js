import {Button, Platform, View} from "react-native";
import {Text} from "react-native-paper";
import {useState} from "react";

export function UploadExcelMainPage() {

    const [imageUpload, setFileUpload] = useState(null);

    const uploadFile = () => {
        if (imageUpload == null) return;
        else
            console.log(imageUpload)
            console.log(imageUpload.uri)
        const data = new FormData();
        data.append('file', {
            name: imageUpload.name,
            type: imageUpload.type,
            uri: Platform.OS === 'ios' ?
                imageUpload.uri.replace('file://', '')
                : imageUpload.uri,
        });
        console.log("got")
        console.log(data)

    };

    const showFileDetails = () => {
        if (imageUpload !== null)
            return imageUpload.name;
        else
            return ''
    }


    async function uploadToServer() {
        await Axios.post("https://upload-service-url", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>עמוד העלאה</Text>
            <input

                type="file"
                webkitRelativePath
                onChange={(event) => {
                    setFileUpload(event.target.files[0]);
                }}
            />
            <Button title={"העלאה"} onPress={() => uploadFile()}></Button>
            {showFileDetails()}

        </View>
    );
}

