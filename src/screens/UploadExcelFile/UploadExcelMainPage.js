import {Button, View} from "react-native";
import {Text} from "react-native-paper";
import {useEffect, useState} from "react";
import {parseExcelToJson} from '../../hooks/UploadExcel/ParseExcelFile'
import UseFetchPost from "../../hooks/ApiCalls/useFetchPost";


export function UploadExcelMainPage({setParsedData, parsedData}) {

    const url = 'http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/v1/authentication/group/'
    const uploadFileConst = UseFetchPost(url, parsedData)

    const [fileUpload, setFileUpload] = useState(null);

    useEffect(() => {
        if (uploadFileConst && uploadFileConst.error)
            console.log("error", uploadFileConst)
    }, [uploadFileConst]);


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
                {parsedData ? <h1>File parsed - watch console log to see if uploaded</h1> : ""}
                {parsedData && parsedData.users && parsedData.users.length >= 1 ? (
                    <>
                        <h1>Items from excel that will be uploaded</h1>
                        {parsedData.users.map(user => {
                            return (
                                <div
                                    key={user.email}>{user.firstname + ' - ' + user.lastname + ' - ' + user.email}</div>)
                        })}
                        {uploadFileConst && uploadFileConst.error ? (
                            <>
                                <h1>{uploadFileConst.error.code}</h1>
                                <h1>{uploadFileConst.error.message}</h1>
                            </>
                        ) : (<></>)}
                    </>
                ) : (<></>)}
            </div>
        </View>
    );
}

