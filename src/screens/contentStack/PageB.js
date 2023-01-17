import {Button, Text, View} from 'react-native'

export default function PageB({navigation}) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>
                This is the second page
            </Text>
            <Text style={{marginBottom: 15}}>
                you can hit back or press this button to navigate
            </Text>
            <Button
                title="Go to Page A"
                onPress={() => navigation.navigate("PageA")}
            />
        </View>
    );
}
  