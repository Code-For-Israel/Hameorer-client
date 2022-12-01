import {useState, useEffect} from "react";
import {Button, View, Image, ScrollView} from "react-native";
import * as React from "react";
import {Text} from "react-native-paper";

export function ImageComponent() {

    const [uploadedPhotos, setUploadedPhotoss] = useState(null);
    const [photoUri, setPhotoUri] = useState(null);
    const [photoName, setPhotoName] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);

    async function uploadFile() {
        console.log("starting")
        if (uploadedPhotos == null) return;
        Array.from(uploadedPhotos).forEach(photo => {
            setPhotoUri(URL.createObjectURL(photo));
            setPhotoName(photo.name);
            if (photoName && photoUri)
                setSelectedFiles((images) => images.concat({name: photo.name, uri: URL.createObjectURL(photo)}));
        });
        console.log(selectedFiles,"done")

        // create form data
        // const data = new FormData();
        // data.append('name', photos.name);
        // data.append('type', photos.type);
        // data.append('uri', fileUrl);
    }

    function showImages() {
        console.log("shownig images")
        if (selectedFiles && selectedFiles.length > 0) {
            console.log(selectedFiles,"inside if of showing")
            return (
                selectedFiles.map((img, key) =>
                    <Image key={key}
                           source={{uri: img.uri}}
                           style={{width: 150, height: 250}}
                    />
                )
            )
        }
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>תמונות</Text>

            <>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} pagingEnabled={true}>
                    {showImages()}
                </ScrollView>

                <input
                    id="files"
                    type="file"
                    multiple="multiple"
                    style={{display: "none"}}
                    onChange={(event) => {
                        setUploadedPhotoss(event.target.files);
                    }}
                />

                <label style={{margin: "4px"}} htmlFor="files">בחר קבצים להעלאה</label>

                <Button title={"העלאה"} onPress={() => uploadFile()}></Button>
            </>
        </View>

    )
}

