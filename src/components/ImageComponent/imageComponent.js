import {Button, View, Image} from "react-native";
import * as React from "react";
import _ from "lodash"; // cool kids know _ is low-dash

export function ImageComponent() {

    const [photos, setPhotoss] = React.useState(null);
    const [photoUri, setPhotoUri] = React.useState(null);
    const photoList = []

    async function uploadFile() {
        if (photos == null) return;
        Array.from(photos).forEach(photo => {
            const photoUrl = URL.createObjectURL(photo);
            const photoName = photo.name;
            let deepCopyPhoto = _.cloneDeep({name: photoName, uri: photoUrl});
            photoList.push(deepCopyPhoto)
        });

        // create form data
        // const data = new FormData();
        // data.append('name', photos.name);
        // data.append('type', photos.type);
        // data.append('uri', fileUrl);
        console.log(photoList)
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <>
                {photoList && photoList.length>0 ? photoList.forEach((img) =>
                    <Image
                        source={{uri: img.uri}}
                        style={{width: 150, height: 150}}
                    />
                ) : 'sdf'}

                <input
                    type="file"
                    multiple="multiple"
                    onChange={(event) => {
                        setPhotoss(event.target.files);
                    }}
                />
                <Button title={"העלאה"} onPress={() => uploadFile()}></Button>
            </>
        </View>

    )
}

