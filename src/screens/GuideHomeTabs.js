import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomBg from '../components/CustomBg';
import MyGroupSummary from './SheetScreens/Guides/MyGroupSummary';
import UserIcon from '../components/IconsSvg/UserIcon';
import MyGroup from './SheetScreens/Guides/MyGroup';
import ViewDID from './SheetScreens/Guides/ViewDID';
import MyGroupSummaryByUser from './SheetScreens/Guides/MyGroupSummaryByUser';
import MyTaskIcon from "../components/IconsSvg/MyTaskIcon";

const Tab = createBottomTabNavigator();

const GuideHomeTabs = () => {
    const commonOptions = {
        headerTitleAlign: 'center',
        headerBackground: CustomBg,
        headerTintColor: '#fff',
    };

    const screens = [
        {
            name: 'MyGroup',
            component: MyGroup,
            label: 'הקבוצה שלי',
            title: 'הקבוצה שלי',
            icon: UserIcon,
        },
        {
            name: 'MyGroupSummary',
            component: MyGroupSummary,
            label: 'סיכום הקבוצה שלי',
            title: 'סיכום הקבוצה שלי',
            icon: UserIcon,
        },
        {
            name: 'MyGroupSummaryByUser',
            component: MyGroupSummaryByUser,
            label: 'דו"ח קבוצה',
            title: 'דו"ח קבוצה',
            icon: UserIcon,
        },
        {
            name: 'ViewDID',
            component: ViewDID,
            label: 'צפיה במשימה',
            title: 'צפיה במשימה',
            icon: MyTaskIcon,
        }
    ];

    return (
        <Tab.Navigator
            initialRouteName="MyGroup"
            screenOptions={{
                tabBarActiveTintColor: '#1261A0',
                tabBarIconStyle: {width: 25, paddingLeft: 5},
            }}
        >
            {screens.map((screen) => (
                <Tab.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={{
                        ...commonOptions,
                        tabBarLabel: screen.label,
                        headerTitle: screen.title,
                        tabBarIcon: ({color, size}) => <screen.icon color={color} size={size}/>,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default GuideHomeTabs;
