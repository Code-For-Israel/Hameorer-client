import {Button, View} from "react-native";
import {Text} from "react-native-paper";
import * as React from "react";

export function NotificationPage(navigation) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: "#000", marginBottom: 15 }}>עמוד שני</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

