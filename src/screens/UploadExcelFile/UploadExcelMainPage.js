import {Button, View} from "react-native";
import {Text} from "react-native-paper";
import {useState} from "react";
import {parseExcelToJson} from '../../hooks/UploadExcel/ParseExcelFile'


export function UploadExcelMainPage({setParsedData, parsedData}) {

    const [fileUpload, setFileUpload] = useState(null);

    const FILE_TYPE_ACCEPTED = ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
    const showFileDetails = () => {
        if (fileUpload !== null)
            return <>File to upload: {fileUpload.name}</>;
        else
            return <></>
    }

    async function uploadFile() {
        if (fileUpload == null) return;
        const fileUrl = URL.createObjectURL(fileUpload)

        //create form data
        const formData = new FormData();
        formData.append('name', fileUpload.name);
        formData.append('type', fileUpload.type);
        formData.append('uri', fileUrl);

        //parse excel into json
        const excelParsedToJsonData = await parseExcelToJson(fileUrl);

        //create the body of the post request
        const userGroupBody = {group_name: fileUpload.name, users: excelParsedToJsonData}

        setParsedData(userGroupBody)

        //todo upload to server

    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>עמוד העלאה</Text>
            <input
                type="file"
                accept={FILE_TYPE_ACCEPTED}
                onChange={(event) => {
                    setFileUpload(event.target.files[0]);
                }}
            />
            <Button title={"העלאה"} onPress={() => uploadFile()}></Button>
            {showFileDetails()}
            <div>
                {parsedData ? <h1>File parsed - watch console log</h1> : ""}
            </div>
        </View>
    );
}

