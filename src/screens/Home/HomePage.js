import {Button, View} from "react-native";
import {Text} from "react-native-paper";
import * as React from "react";

export function HomePage(navigation) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: "#000", marginBottom: 15 }}>עמוד ראשון בתוך הטאב עם קישור במגירה</Text>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

