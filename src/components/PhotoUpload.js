import React, {useState, useEffect} from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoUpload({imageList, setImageList}) {


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
            console.log(result)
            setImageList([...imageList, result.assets[0]]);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="בחר תמונות" onPress={pickImage}/>

            <View style={styles.imageList}>
                {imageList && imageList.map((img) => (
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