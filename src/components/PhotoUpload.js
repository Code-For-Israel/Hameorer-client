import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function PhotoUpload({ imageList, setImageList, setRespondsList }) {
    const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

    const clearPhotos = async () => {
        setImageList([]);
        setRespondsList([]);
    };

    const pickImage = async () => {
        let result = await DocumentPicker.getDocumentAsync({ type: ALLOWED_TYPES });
        if (result.type === 'success') {
            if (ALLOWED_TYPES.includes(result.mimeType) === false) {
                console.log('wrong type of file - only img');
            } else {
                setImageList([...imageList, result]);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} title="בחר תמונות" onPress={pickImage} />
                <Button title="מחק תמונות" onPress={clearPhotos} color="#FF3B30" />
            </View>
            <View style={styles.imageList}>
                {imageList &&
                    imageList.map((img) => (
                        <Image key={img.uri} source={{ uri: img.uri }} style={styles.image} />
                    ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingTop: 10,
    },
    button: {
        marginHorizontal: 5,
        width: '33%',
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
        borderRadius: 5,
    },
});
