import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import CustomButton from '../../components/CustomButton';
import GetSiteUrl from '../GetSiteUrl';
import UseFetchPost from '../../hooks/ApiCalls/useFetchPost';
import { parseExcelToJson } from '../../hooks/UploadExcel/ParseExcelFile';
import { styles } from '../../styles/PagesStyle';

const ALLOWED_TYPES = [
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
  'text/csv',
];

export const UploadExcelFile = ({ setParsedData, parsedData }) => {
  const url = GetSiteUrl() + 'v1/authentication/group/';
  const uploadFileConst = UseFetchPost(url, parsedData);

  useEffect(() => {
    if (uploadFileConst && uploadFileConst.error) console.log(uploadFileConst);
  }, [uploadFileConst]);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({ type: ALLOWED_TYPES });
    if (result.type === 'success') {
      if (ALLOWED_TYPES.includes(result.mimeType) === false)
        console.log('wrong type of file - only csv and excel');
      else {
        const fileUrl = result.uri;
        //create form data
        const formData = new FormData();
        formData.append('name', result.file.name);
        formData.append('type', result.file.type);
        formData.append('uri', fileUrl);

        //parse excel into json
        const excelParsedToJsonData = await parseExcelToJson(fileUrl);

        //create the body of the post request
        const userGroupBody = {
          group_name: result.file.name,
          users: excelParsedToJsonData,
        };

        setParsedData(userGroupBody);
      }
    }
  };

  const ShowFileStatus = () => {
    return (
      <>
        {uploadFileConst && uploadFileConst.error && uploadFileConst.data === null ? (
          <Text>Failed to upload file</Text>
        ) : (
          ''
        )}
        {uploadFileConst && uploadFileConst.data !== null && uploadFileConst.loading === false ? (
          <Text>file uploaded successfully</Text>
        ) : (
          ''
        )}
        {uploadFileConst && uploadFileConst.loading === true ? <Text>uploading...</Text> : ''}
      </>
    );
  };

  function ShowParsedData() {
    return (
      <>
        {parsedData && parsedData.users && parsedData.users.length >= 1 ? (
          <>
            <Text style={{ textDecorationLine: 'underline' }}>
              Items from excel that will be uploaded
            </Text>
            {parsedData.users.map((user) => {
              return (
                <Text key={user.email}>
                  {user.firstname + ' - ' + user.lastname + ' - ' + user.email}
                </Text>
              );
            })}
          </>
        ) : (
          <Text></Text>
        )}
      </>
    );
  }

  return (
    <>
      <Text style={styles.excelFileUpload}>Upload CSV File</Text>
      <TouchableOpacity>
        <CustomButton text="Upload File" onPress={pickDocument} />
      </TouchableOpacity>
      {ShowFileStatus()}
      {ShowParsedData()}
    </>
  );
};
