import {Text, View} from 'react-native'
import React from 'react'

const PlusScreen = () => {
    return (
        <View>
            <Text>PlusScreen PAGE</Text>
        </View>
    )
}

export default PlusScreen


// import { Text, View, StyleSheet } from "react-native";
// import Self from "./SheetScreens/SelfGuide/Self";
// import Ceremony from "./SheetScreens/Ceremony";
// import FamilyMem from "./SheetScreens/FamilyMem";
// import PersonalDiary from "./SheetScreens/PersonalDiary";
// import { createStackNavigator } from "@react-navigation/stack";

// const Stack = createStackNavigator();

// export default function PlusScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Self"
//         component={Self}
//         options={{ headerTitle: "כותרת של הדרכה עצמית", headerShown: false }}
//       />
//       <Stack.Screen
//         name="Ceremony"
//         component={Ceremony}
//         options={{ headerTitle: "כותרת של הכנת הטקס", headerShown: false }}
//       />
//       <Stack.Screen
//         name="FamilyMem"
//         component={FamilyMem}
//         options={{ headerTitle: "כותרת של זיכרון משפחתי", headerShown: false }}
//       />
//       <Stack.Screen
//         name="PersonalDiary"
//         component={PersonalDiary}
//         options={{ headerTitle: "כותרת של יומן אישי", headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
