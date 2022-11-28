import {Button, View} from "react-native";
import {Text} from "react-native-paper";
import * as React from "react";

export function PersonalDiaryPage({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: "#000", marginBottom: 15 }}>Diary</Text>
            <Button
                onPress={() => navigation.navigate('Content')}
                title="Go Back"
            />
        </View>
    );
}

