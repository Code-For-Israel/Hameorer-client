import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Page1 from './SelfGuide/Page1';
import Page2 from './SelfGuide/Page2';
import Page3 from './SelfGuide/Page3';
import Page4 from './SelfGuide/Page4';
import Page5 from './SelfGuide/Page5';
import CustomBg from '../../../components/CustomBg';

const SelfGuideStack = createStackNavigator();

export default function SelfGuid() {
    return (
        <SelfGuideStack.Navigator>
            <SelfGuideStack.Screen
                name="Page1"
                component={Page1}
                options={{
                    headerTitle: 'הדרכה עצמית', // this is the part of custom background
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff', //end of custom background
                }}
            />
            <SelfGuideStack.Screen
                name="Page2"
                component={Page2}
                options={{
                    headerTitle: 'לספר בסיפור את הנושא כולל היסטוריה וכו’...',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
            <SelfGuideStack.Screen
                name="Page3"
                component={Page3}
                options={{
                    headerTitle: 'שאלה / דילמה ערכית מהותית',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
            <SelfGuideStack.Screen
                name="Page4"
                component={Page4}
                options={{
                    headerTitle: 'סיכום',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
            <SelfGuideStack.Screen
                name="Page5"
                component={Page5}
                options={{
                    headerTitle: 'הוספת תמונת וקבצים',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                }}
            />
        </SelfGuideStack.Navigator>
    );
}
