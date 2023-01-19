import React from "react";
import {StyleSheet, Text, TouchableOpacity,} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import CustomButton from "../../components/CustomButton";

export const UploadFile = () => {
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result.uri);
        console.log(result);
    };

    return (
        <>
            <Text style={styles.file}>Upload CSV File</Text>
            <TouchableOpacity>
                <CustomButton
                    text="Upload File"
                    onPress={pickDocument}
                />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    file: {
        color: "black",
        marginHorizontal: 15,
    },
    button: {
        marginHorizontal: 60,
    },
});