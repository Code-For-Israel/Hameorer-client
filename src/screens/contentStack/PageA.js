import { View , Button, Text } from 'react-native'

export default function PageA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{marginBottom: 15}}>
        This is the first page
      </Text>
      <Button
        title="Go to Page B"
        onPress={() => navigation.navigate("PageB")}
      />
    </View>
  );
}
