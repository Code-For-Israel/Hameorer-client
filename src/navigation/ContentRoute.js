import {HomePage} from "../screens/Home/HomePage";
import {NotificationPage} from "../screens/Notifications/NotificationPage";
import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

export function ContentRoute() {
    return (
        // <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomePage}/>
            <Drawer.Screen name="Notifications" component={NotificationPage}/>
        </Drawer.Navigator>
        // </NavigationContainer>
    )
}