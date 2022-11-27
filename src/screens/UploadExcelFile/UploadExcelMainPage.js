import {Button, Platform, View} from "react-native";
import {Text} from "react-native-paper";
import {useState} from "react";
import {printFormData} from "../../utils/printFormDataObject";
import {parseExcelToJson, extractExcel, getExcelColumns} from './parseExcelFile'


export function UploadExcelMainPage() {

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
        const data = new FormData();
        data.append('name', fileUpload.name);
        data.append('type', fileUpload.type);
        data.append('uri', fileUrl);

        //parse excel into json
        const excelParsedToJsonData = await parseExcelToJson(fileUrl);

        //get all columns from excel
        let allColumnsExcel = getExcelColumns(excelParsedToJsonData);

        //create obj with excel data
        const excelDataParsedReady = extractExcel(allColumnsExcel, excelParsedToJsonData);


        printFormData(data)
        console.log(excelDataParsedReady)

        //todo enable this once server is ready - take it to another js file as well
        // uploadToServer()
    };

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

        </View>
    );
}

