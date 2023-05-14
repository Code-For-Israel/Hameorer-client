import React, {useState, useEffect} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import GetSiteUrl from "../utils/GetSiteUrl";
import {useSelector} from "react-redux";
import {selectAccess} from "../redux/userSlice";

export default function PhotoUpload({imageList, setImageList}) {
    const access = useSelector(selectAccess);

    useEffect(() => {
        console.log(imageList);
    }, [imageList]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        });

        if (!result.cancelled) {
            console.log(result);
            setImageList([...imageList, result.assets[0]]);
        }
    };
    const upload = async () => {
        let response;
        console.log(imageList)
        const bucket = 'hameorer-img';
        const baseUrl = GetSiteUrl();
        response = await fetch(`${baseUrl}v1/media/${bucket}/${'test.jpg'}/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${access}`,
            },
            body: imageList[0],
        }).then((response) => response.json());
        console.log(response)
    }

    return (
        <View style={styles.container}>
            <Button title="בחר תמונות" onPress={pickImage} />

            <Button title="שלח" onPress={upload} />

            <View style={styles.imageList}>
                {imageList &&
                    imageList.map((img) => (
                        <Image key={img.uri} source={{uri: img.uri}} style={styles.image} />
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
