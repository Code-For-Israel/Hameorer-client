import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';

import HomeTabs from "./src/components/HomeTabs";
import Page1 from "./src/screens/sheetScreens/SelfGuide/Page1";
import Page2 from "./src/screens/sheetScreens/SelfGuide/Page2";
import Page3 from "./src/screens/sheetScreens/SelfGuide/Page3";
import Page4 from "./src/screens/sheetScreens/SelfGuide/Page4";
import Page5 from "./src/screens/sheetScreens/SelfGuide/Page5";
import DID from "./src/screens/DID";
import Ceremony from "./src/screens/sheetScreens/Ceremony";
import FamilyMem from "./src/screens/sheetScreens/FamilyMem";
import PersonalDiary from "./src/screens/sheetScreens/PersonalDiary";
import CustomBg from "./src/components/CustomBg";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <StatusBar style="light" />
      <Stack.Navigator>
        {/* this screen have all the bottom tabs navigation */}
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        {/* 5 screens of self guide */}
        <Stack.Screen
          name="Page1"
          component={Page1}
          options={{
            headerTitle: "הדרכה עצמית",
            // this is the part of custom background
            headerTitleAlign: "center",
            headerBackground: CustomBg,
            headerTintColor: "#fff",
            //end of custom background
          }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{
            headerTitle: "לספר בסיפור את הנושא כולל היסטוריה וכו’...",
            headerTitleAlign: "center",
            headerBackground: CustomBg,
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Page3"
          component={Page3}
          options={{
            headerTitle: "שאלה / דילמה ערכית מהותית",
            headerTitleAlign: "center",
            headerBackground: CustomBg,
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Page4"
          component={Page4}
          options={{
            headerTitle: "סיכום",
            headerTitleAlign: "center",
            headerBackground: CustomBg,
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Page5"
          component={Page5}
          options={{
            headerTitle: "הוספת תמונת וקבצים",
            headerTitleAlign: "center",
            headerBackground: CustomBg,
            headerTintColor: "#fff",
          }}
        />
        {/* end of 5 screens */}
        {/* screens of the menu from below - bottom sheet */}
        <Stack.Screen
          name="Ceremony"
          component={Ceremony}
          options={{ headerTitle: "כותרת הכנת טקס" }}
        />
        <Stack.Screen
          name="FamilyMem"
          component={FamilyMem}
          options={{ headerTitle: "כותרת זכרון משפחתי" }}
        />
        <Stack.Screen
          name="PersonalDiary"
          component={PersonalDiary}
          options={{ headerTitle: "כותרת יומן אישי" }}
        />
        <Stack.Screen
          name="DID"
          component={DID}
          options={{
            headerTitle: "הוספת דמות",
            // this is the part of custom background
            headerTitleAlign: "center",
            headerBackground: CustomBg,
            headerTintColor: "#fff",
            //end of custom background
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
