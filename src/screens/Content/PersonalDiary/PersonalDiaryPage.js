import { TextInput, View} from "react-native";
import {Text} from "react-native-paper";
import * as React from "react";
import {ImageComponent} from '../../../components/ImageComponent/imageComponent'

export function PersonalDiaryPage() {

    const [text, setText] = React.useState("כאן יהיה טקסט - אפשר לערוך ולרשום מה שרוצים");

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
                label="טקסט"
                placeholder="הכנס טקסט"
                value={text}
                style={{
                    width: "90%", height: "50%", alignItems: "center", marginBottom: 10, marginTop: 10, paddingTop: 0,
                    paddingBottom: 0
                }}
                onChangeText={text => setText(text)}
            />
            <Text>תמונות</Text>
            <ImageComponent></ImageComponent>
        </View>
    );
}

