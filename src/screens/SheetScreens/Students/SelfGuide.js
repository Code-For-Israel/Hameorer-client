import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Page1 from './SelfGuide/Page1';
import Page2 from './SelfGuide/Page2';
import Page3 from './SelfGuide/Page3';
import Page4 from './SelfGuide/Page4';
import Page5 from './SelfGuide/Page5';
import IndexPage from './SelfGuide/IndexPage';


const SelfGuideStack = createStackNavigator();

export default function SelfGuid() {
    const screenOptions = {
        headerShown: false,
    };

    const screens = [
        {name: 'IndexPage', component: IndexPage},
        {name: 'Page1', component: Page1},
        {name: 'Page2', component: Page2},
        {name: 'Page3', component: Page3},
        {name: 'Page4', component: Page4},
        {name: 'Page5', component: Page5},
    ];

    return (
        <SelfGuideStack.Navigator>
            {screens.map((screen) => (
                <SelfGuideStack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={screenOptions}
                />
            ))}
        </SelfGuideStack.Navigator>
    );
}
