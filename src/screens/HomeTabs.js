import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProfileScreen from './ProfileScreen';
// import MyContentScreen from "./BottomNavBarScreens/MyContentScreen";
// import TimelineScreen from "./BottomNavBarScreens/TimelineScreen";
// import TopicsScreen from "./BottomNavBarScreens/TopicsScreen";
// import MapScreen from "./BottomNavBarScreens/MapScreen";
import CustomBg from '../components/CustomBg';

//icons
import UserIcon from '../components/IconsSvg/UserIcon';
import MyContentIcon from '../components/IconsSvg/MyContentIcon';
import TimelineIcon from '../components/IconsSvg/TimelineIcon';
import TopicsIcon from '../components/IconsSvg/TopicsIcon';
import MapIcon from '../components/IconsSvg/MapIcon';
import PageNotReady from './BottomNavBarScreens/PageNotReady';
import ViewTask from "./SheetScreens/Students/ViewTask";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                tabBarActiveTintColor: '#1261A0',
                tabBarIconStyle: {width: 25, paddingLeft: 5},
            }}
        >
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    headerTitle: 'פרופיל',
                    tabBarLabel: 'העמוד שלי',
                    // this is the part of custom background
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                    //end of custom background
                    tabBarIcon: ({color, size}) => <UserIcon color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="MyContent"
                // component={MyContentScreen}
                component={PageNotReady}
                options={{
                    headerTitle: 'התוכן שלי',
                    tabBarLabel: 'התוכן שלי',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                    tabBarIcon: ({color, size}) => <MyContentIcon color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Timeline"
                // component={TimelineScreen}
                component={PageNotReady}
                options={{
                    headerTitle: 'ציר זמן',
                    tabBarLabel: 'ציר זמן',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                    tabBarIcon: ({color, size}) => <TimelineIcon color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Topics"
                // component={TopicsScreen}
                component={PageNotReady}
                options={{
                    // headerShown: false,
                    headerTitle: 'של נושאים',
                    tabBarLabel: 'נושאים',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                    tabBarIcon: ({color, size}) => <TopicsIcon color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Map"
                // component={MapScreen}
                component={PageNotReady}
                options={{
                    headerTitle: 'מפה',
                    tabBarLabel: 'מפה',
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                    tabBarIcon: ({color, size}) => <MapIcon name="map" color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="ViewTask"
                component={ViewTask}
                options={{
                    headerTitle: 'צפה במשימה',
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

export default HomeTabs;
