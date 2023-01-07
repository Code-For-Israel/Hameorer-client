import {Button, View} from "react-native";
import {Text} from "react-native-paper";
import {useEffect, useState} from "react";
import {parseExcelToJson} from "../../hooks/UploadExcel/ParseExcelFile";
import UseFetchPost from "../../hooks/ApiCalls/useFetchPost";
import getSiteUrl from "../../utils/getSiteUrl";

export function UploadExcelMainPage({setParsedData, parsedData}) {
    const url =
        getSiteUrl() + "v1/authentication/group/";
    const uploadFileConst = UseFetchPost(url, parsedData);

    const [fileUpload, setFileUpload] = useState(null);

    useEffect(() => {
        if (uploadFileConst && uploadFileConst.error)
            console.log("error", uploadFileConst);
    }, [uploadFileConst]);

    const FILE_TYPE_ACCEPTED =
        ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel";
    const showFileDetails = () => {
        if (fileUpload !== null) return <Text>File to upload: {fileUpload.name}</Text>;
        else return <Text></Text>;
    };

    async function uploadFile() {
        if (fileUpload == null) return;
        const fileUrl = URL.createObjectURL(fileUpload);

        //create form data
        const formData = new FormData();
        formData.append("name", fileUpload.name);
        formData.append("type", fileUpload.type);
        formData.append("uri", fileUrl);

        //parse excel into json
        const excelParsedToJsonData = await parseExcelToJson(fileUrl);

        //create the body of the post request
        const userGroupBody = {
            group_name: fileUpload.name,
            users: excelParsedToJsonData,
        };

        setParsedData(userGroupBody);
    }

    return (
        <>
            {
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text>עמוד העלאה</Text>
                    <Text>cant use input tag with react native - need to replace it</Text>
                    <input
                        type="file"
                        accept={FILE_TYPE_ACCEPTED}
                        onChange={(event) => {
                            setFileUpload(event.target.files[0]);
                        }}
                    />
                    <Button title={"העלאה"} onPress={() => uploadFile()}></Button>
                    {showFileDetails()}
                    <>
                        {parsedData ? (
                            <Text>File parsed - watch console log to see if uploaded</Text>
                        ) : (
                            ""
                        )}
                        {parsedData && parsedData.users && parsedData.users.length >= 1 ? (
                            <>
                                <Text>Items from excel that will be uploaded</Text>
                                {parsedData.users.map((user) => {
                                    return (
                                        <Text key={user.email}>
                                            {user.firstname +
                                                " - " +
                                                user.lastname +
                                                " - " +
                                                user.email}
                                        </Text>
                                    );
                                })}
                                {uploadFileConst && uploadFileConst.error ? (
                                    <>
                                        <Text>{uploadFileConst.error.code}</Text>
                                        <Text>{uploadFileConst.error.message}</Text>
                                    </>
                                ) : (
                                    <Text></Text>
                                )}
                                {uploadFileConst && uploadFileConst.data ? (
                                    <>
                                        <Text>Data uploaded successfully!</Text>
                                    </>
                                ) : (
                                    <Text></Text>
                                )}
                            </>
                        ) : (
                            <Text></Text>
                        )}
                    </>
                </View>
            }
        </>
    );
}
