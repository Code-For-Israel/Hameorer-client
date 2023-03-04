import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomBg from '../components/CustomBg';
import MyGroupSummary from './SheetScreens/Guides/MyGroupSummary';
//icons
import UserIcon from '../components/IconsSvg/UserIcon';
import MyGroup from './SheetScreens/Guides/MyGroup';
import MapIcon from '../components/IconsSvg/MapIcon';
import ViewDID from './SheetScreens/Guides/ViewDID';
import MyGroupSummaryByUser from './SheetScreens/Guides/MyGroupSummaryByUser';

const Tab = createBottomTabNavigator();

const GuideHomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="MyGroup"
            screenOptions={{
                tabBarActiveTintColor: '#1261A0',
                tabBarIconStyle: {width: 25, paddingLeft: 5},
            }}
        >
            <Tab.Screen
                name="MyGroupSummary"
                component={MyGroupSummary}
                options={{
                    headerShown: false,
                    headerTitle: 'סיכום הקבוצה שלי',
                    tabBarLabel: 'סיכום הקבוצה שלי',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff', //end of custom background
                    tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="MyGroupSummaryByUser"
                component={MyGroupSummaryByUser}
                options={{
                    headerShown: false,
                    headerTitle: 'דו"ח קבוצה',
                    tabBarLabel: 'דו"ח קבוצה',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff', //end of custom background
                    tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="MyGroup"
                component={MyGroup}
                options={{
                    headerShown: false,
                    headerTitle: 'הקבוצה שלי',
                    tabBarLabel: 'הקבוצה שלי', // this is the part of custom background
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff', //end of custom background
                    tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="ViewDID"
                component={ViewDID}
                options={{
                    headerTitle: 'צפיה במשימה',
                    tabBarLabel: 'צפיה במשימה',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                    tabBarIcon: ({color, size}) => <MapIcon name="map" color={color} size={size} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default GuideHomeTabs;
