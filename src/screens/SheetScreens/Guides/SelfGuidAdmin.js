import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Page1 from './SelfGuide/Page1';
import Page2 from './SelfGuide/Page2';
import Page3 from './SelfGuide/Page3';
import Page4 from './SelfGuide/Page4';
import Page5 from './SelfGuide/Page5';
import CustomBg from '../../../components/CustomBg';
import MyGroupPolinActivity from './MyGroupPolinActivity';

const SelfGuideStack = createStackNavigator();

export default function SelfGuidAdmin() {
    return (
        <SelfGuideStack.Navigator>
            <SelfGuideStack.Screen
                name="MyGroupPolinActivity"
                component={MyGroupPolinActivity}
                options={{
                    headerShown: false,
                    headerBackground: CustomBg,
                    headerTintColor: '#fff', //end of custom background
                }}
            />
            <SelfGuideStack.Screen
                name="Page1"
                component={Page1}
                options={{
                    headerShown: false,
                    headerBackground: CustomBg,
                    headerTintColor: '#fff', //end of custom background
                }}
            />
            <SelfGuideStack.Screen
                name="Page2"
                component={Page2}
                options={{
                    headerShown: false,
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
            <SelfGuideStack.Screen
                name="Page3"
                component={Page3}
                options={{
                    headerShown: false,
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
            <SelfGuideStack.Screen
                name="Page4"
                component={Page4}
                options={{
                    headerShown: false,
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
            <SelfGuideStack.Screen
                name="Page5"
                component={Page5}
                options={{
                    headerShown: false,
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
        </SelfGuideStack.Navigator>
    );
}
