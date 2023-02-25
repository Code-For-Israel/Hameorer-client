import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import GuideHomeTabs from "./GuideHomeTabs";

const Stack = createStackNavigator();

const MainNav = () => {
    return (<Stack.Navigator initialRouteName="GuideHomeTabs">
            <Stack.Screen
                name="Home"
                component={GuideHomeTabs}
                options={{headerShown: false}}
            />
        </Stack.Navigator>);
};

export default MainNav;
