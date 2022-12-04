// import { Text, View, StyleSheet } from "react-native";
import Self from "./sheetScreens/Self";
import Ceremony from "./sheetScreens/Ceremony";
import FamilyMem from "./sheetScreens/FamilyMem";
import PersonalDiary from "./sheetScreens/PersonalDiary";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function PlusScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Self"
        component={Self}
        options={{ headerTitle: "כותרת של הדרכה עצמית", headerLeft: null }}
      />
      <Stack.Screen
        name="Ceremony"
        component={Ceremony}
        options={{ headerTitle: "כותרת של הכנת הטקס", headerLeft: null }}
      />
      <Stack.Screen
        name="FamilyMem"
        component={FamilyMem}
        options={{ headerTitle: "כותרת של זיכרון משפחתי", headerLeft: null }}
      />
      <Stack.Screen
        name="PersonalDiary"
        component={PersonalDiary}
        options={{ headerTitle: "כותרת של יומן אישי", headerLeft: null }}
      />
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
