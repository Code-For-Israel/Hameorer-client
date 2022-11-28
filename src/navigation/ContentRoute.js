import {ContentPage} from "../screens/Content/ContentPage";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {FamilyMemoryPage} from "../screens/Content/FamilyMemory/FamilyMemoryPage";
import {PersonalDiaryPage} from "../screens/Content/PersonalDiary/PersonalDiaryPage";
import {CeremonyPage} from "../screens/Content/Ceremony/CeremonyPage";
import {SelfGuidancePage} from "../screens/Content/SelfGuidance/SelfGuidancePage";
const Drawer = createDrawerNavigator();

export function ContentRoute() {
    return (
        // <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
            <Drawer.Screen name="עמוד תוכן" component={ContentPage}/>
            <Drawer.Screen name="יומן אישי" component={PersonalDiaryPage}/>
            <Drawer.Screen name="זיכרון משפחתי" component={FamilyMemoryPage}/>
            <Drawer.Screen name="הכנת טקס" component={CeremonyPage}/>
            <Drawer.Screen name="הדרכה עצמית" component={SelfGuidancePage}/>
        </Drawer.Navigator>
        // </NavigationContainer>
    )
}