import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoUpload() {
        const [imageList, setImageList] = useState([]);

        const pickImage = async () => {
                let result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                        multiple: true, // allow selection of multiple images
                });

                if (!result.cancelled) {
                        setImageList([...imageList, result.uri]);
                }
        };

        return (
            <View style={styles.container}>
                    <Button title="בחר תמונות" onPress={pickImage} />

                    <View style={styles.imageList}>
                            {imageList.map((uri) => (
                                <Image key={uri} source={{ uri }} style={styles.image} />
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