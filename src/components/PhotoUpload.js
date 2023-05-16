import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import GetSiteUrl from "../utils/GetSiteUrl";
import {useSelector} from "react-redux";
import {selectAccess} from "../redux/userSlice";
import * as DocumentPicker from "expo-document-picker";

export default function PhotoUpload({imageList, setImageList, respondsList, setRespondsList}) {
    const access = useSelector(selectAccess);
    const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
    const bucket = 'hameorer-img';
    const baseUrl = GetSiteUrl();

    const pickImage = async () => {
        let result = await DocumentPicker.getDocumentAsync({type: ALLOWED_TYPES});
        if (result.type === 'success') {
            if (ALLOWED_TYPES.includes(result.mimeType) === false)
                console.log('wrong type of file - only img');
            else {
                setImageList([...imageList, result]);
            }
        }
    };

    const upload = async () => {
        let formData = new FormData();
        if (imageList && imageList.length > 0) {
            const uploadPromises = imageList.map(async (img) => {
                formData.append('type', img.mimeType);
                formData.append('file', {
                    uri: img.uri,
                    name: img.name,
                    type: img.mimeType,
                });

                const response = await fetch(`${baseUrl}v1/media/${bucket}/${img.name}/`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${access}`,
                    },
                    body: formData,
                });

                return response.json();
            });

            const responses = await Promise.all(uploadPromises);

            setRespondsList([...respondsList, ...responses]);
            console.log('ok');
        }
    };


    return (
        <View style={styles.container}>
            <Button title="בחר תמונות" onPress={pickImage}/>

            <Button title="העלה תמונות" onPress={upload}/>


            <View style={styles.imageList}>
                {imageList &&
                    imageList.map((img) => (
                        <Image key={img.uri} source={{uri: img.uri}} style={styles.image}/>
                    ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageList: {
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
    },
});
