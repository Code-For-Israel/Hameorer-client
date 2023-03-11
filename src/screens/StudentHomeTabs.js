import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './SheetScreens/Students/ProfileScreen';
import CustomBg from '../components/CustomBg';
import UserIcon from '../components/IconsSvg/UserIcon';
import MyContentIcon from '../components/IconsSvg/MyContentIcon';
import TimelineIcon from '../components/IconsSvg/TimelineIcon';
import TopicsIcon from '../components/IconsSvg/TopicsIcon';
import MapIcon from '../components/IconsSvg/MapIcon';
import PageNotReady from './BottomNavBarScreens/PageNotReady';
import ViewTask from './SheetScreens/Students/ViewTask';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarActiveTintColor: '#1261A0',
    tabBarIconStyle: { width: 25, paddingLeft: 5 },
    headerTitleAlign: 'center',
    headerBackground: CustomBg,
    headerTintColor: '#fff',
};

const tabScreens = [
    { name: 'Profile', component: ProfileScreen, title: 'פרופיל', label: 'העמוד שלי', icon: UserIcon },
    { name: 'MyContent', component: PageNotReady, title: 'התוכן שלי', label: 'התוכן שלי', icon: MyContentIcon },
    { name: 'Timeline', component: PageNotReady, title: 'ציר זמן', label: 'ציר זמן', icon: TimelineIcon },
    { name: 'Topics', component: PageNotReady, title: 'של נושאים', label: 'נושאים', icon: TopicsIcon },
    { name: 'Map', component: PageNotReady, title: 'מפה', label: 'מפה', icon: MapIcon },
    { name: 'ViewTask', component: ViewTask, title: 'צפה במשימה', label: 'צפיה במשימה', icon: MapIcon },
];

const StudentHomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Profile" screenOptions={screenOptions}>
            {tabScreens.map((tabScreen) => (
                <Tab.Screen
                    key={tabScreen.name}
                    name={tabScreen.name}
                    component={tabScreen.component}
                    options={{ headerShown: false, headerTitle: tabScreen.title, tabBarLabel: tabScreen.label, tabBarIcon: ({ color, size }) => <tabScreen.icon color={color} size={size} /> }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default StudentHomeTabs;