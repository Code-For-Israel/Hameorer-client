import {Button, View, Image} from "react-native";
import * as React from "react";

export function ImageComponent() {

    const [photo, setPhoto] = React.useState(null);
    const [photoUri, setPhotoUri] = React.useState(null);

    async function uploadFile() {
        if (photo == null) return;
        const fileUrl = URL.createObjectURL(photo)
        setPhotoUri(fileUrl)

        //create form data
        const data = new FormData();
        data.append('name', photo.name);
        data.append('type', photo.type);
        data.append('uri', fileUrl);
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <>
                {photo ? (
                    <Image
                        source={{uri: photoUri}}
                        style={{width: 150, height: 150}}
                    />
                ) : ''}
                <input
                    type="file"
                    onChange={(event) => {
                        setPhoto(event.target.files[0]);
                    }}
                />
                <Button title={"העלאה"} onPress={() => uploadFile()}></Button>
            </>
        </View>

    )
}

