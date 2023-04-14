import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import GuideHomeTabs from './GuideHomeTabs';
import SelfGuidAdmin from "./SheetScreens/Guides/SelfGuide";

const Stack = createStackNavigator();

const MainNav = () => {
    return (
        <Stack.Navigator initialRouteName="GuideHomeTabs">
            <Stack.Screen name="Home" component={GuideHomeTabs} options={{headerShown: false}} />
            <Stack.Screen name="SelfGuideAdmin" component={SelfGuidAdmin} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default MainNav;
