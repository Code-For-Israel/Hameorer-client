import {Button, Platform, View} from "react-native";
import {Text} from "react-native-paper";
import {useState} from "react";
import {printFormData} from "../../utils/printFormDataObject";

export function UploadExcelMainPage() {

    const [imageUpload, setFileUpload] = useState(null);

    const uploadFile = () => {
        if (imageUpload == null) return;
        const data = new FormData();
        data.append('name', imageUpload.name);
        data.append('type', imageUpload.type);
        data.append('uri', URL.createObjectURL(imageUpload));

        printFormData(data)

        //todo enable this once server is ready - take it to another js file as well
        // uploadToServer()
    };

    const showFileDetails = () => {
        if (imageUpload !== null)
            return <>File to upload: {imageUpload.name}</>;
        else
            return <></>
    }




    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>עמוד העלאה</Text>
            <input

                type="file"
                onChange={(event) => {
                    setFileUpload(event.target.files[0]);
                }}
            />
            <Button title={"העלאה"} onPress={() => uploadFile()}></Button>
            {showFileDetails()}

        </View>
    );
}

