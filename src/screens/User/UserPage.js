// import {View} from "react-native";
// import {Text} from "react-native-paper";

import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FamilyMemoryPage } from "../Content/FamilyMemory/FamilyMemoryPage";
import { PersonalDiaryPage } from "../Content/PersonalDiary/PersonalDiaryPage";
import { CeremonyPage } from "../Content/Ceremony/CeremonyPage";
import { SelfGuidancePage } from "../Content/SelfGuidance/SelfGuidancePage";
import ProfilePage from "../Content/Profile/ProfilePage";
const Drawer = createDrawerNavigator();

export function UserPage() {
    return (
        // <NavigationContainer>
        <Drawer.Navigator


        // useLegacyImplementation initialRouteName="Home"
        >
            <Drawer.Screen name="פרופיל" component={ProfilePage} options={{ headerShown: false }} />
            <Drawer.Screen name="יומן אישי" component={PersonalDiaryPage} options={{ headerShown: false }} />
            <Drawer.Screen name="זיכרון משפחתי" component={FamilyMemoryPage} options={{ headerShown: false }} />
            <Drawer.Screen name="הכנת טקס" component={CeremonyPage} options={{ headerShown: false }} />
            <Drawer.Screen name="הדרכה עצמית" component={SelfGuidancePage} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}
