import * as React from 'react';
import {Dimensions, Platform, Text, View} from 'react-native';
import * as FileSystem from 'expo-file-system';
import PrevButton from '../PrevButton';

const {StorageAccessFramework} = FileSystem;
const width = Dimensions.get('window').width; //full width

const DownloadFile = ({url}) => {
    const [downloadProgress, setDownloadProgress] = React.useState();
    const downloadPath = FileSystem.documentDirectory + (Platform.OS === 'android' ? '' : '');

    const ensureDirAsync = async (dir, intermediates = true) => {
        const props = await FileSystem.getInfoAsync(dir);
        if (props.exist && props.isDirectory) {
            return props;
        }
        let _ = await FileSystem.makeDirectoryAsync(dir, {intermediates});
        return await ensureDirAsync(dir, intermediates);
    };

    const downloadCallback = (downloadProgress) => {
        const progress =
            (downloadProgress.totalBytesWritten * 100) / downloadProgress.totalBytesExpectedToWrite;
        setDownloadProgress(progress.toFixed());
    };

    const downloadFile = async (fileUrl) => {
        if (Platform.OS === 'android') {
            const dir = ensureDirAsync(downloadPath);
        }

        let fileName = fileUrl.split('Reports/')[1];
        //alert(fileName)
        const downloadResumable = FileSystem.createDownloadResumable(
            fileUrl,
            downloadPath + fileName,
            {},
            downloadCallback,
        );

        try {
            const {uri} = await downloadResumable.downloadAsync();
            if (Platform.OS === 'android') saveAndroidFile(uri, fileName);
            else saveIosFile(uri);
        } catch (e) {
            console.error('download error:', e);
        }
    };

    const saveAndroidFile = async (fileUri, fileName = 'File') => {
        try {
            const fileString = await FileSystem.readAsStringAsync(fileUri, {
                encoding: FileSystem.EncodingType.Base64,
            });

            const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();
            if (!permissions.granted) {
                return;
            }

            try {
                await StorageAccessFramework.createFileAsync(
                    permissions.directoryUri,
                    fileName,
                    'video/mp4',
                )
                    .then(async (uri) => {
                        await FileSystem.writeAsStringAsync(uri, fileString, {
                            encoding: FileSystem.EncodingType.Base64,
                        });
                        alert('הורדה הושלמה');
                    })
                    .catch((e) => {});
            } catch (e) {
                throw new Error(e);
            }
        } catch (err) {
            throw new Error(e);
        }
    };

    return (
        <View style={{width: width, alignItems: 'center', padding: 5}}>
            <PrevButton title={'הורד'} onPress={() => downloadFile(url)}></PrevButton>
            <Text
                style={{
                    fontSize: 18,
                    color: '#072F5F',
                    fontWeight: 'bold',
                    marginBottom: 15,
                    marginTop: 15,
                    marginRight: 15,
                    paddingTop: 10,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {downloadProgress}
            </Text>
        </View>
    );
};

export default DownloadFile;
