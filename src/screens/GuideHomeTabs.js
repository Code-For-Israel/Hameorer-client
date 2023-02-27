import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomBg from '../components/CustomBg';

//icons
import UserIcon from '../components/IconsSvg/UserIcon';
import MyGroup from './SheetScreens/Guides/MyGroup';
import MapIcon from '../components/IconsSvg/MapIcon';
import ViewDID from './SheetScreens/Guides/ViewDID';

const Tab = createBottomTabNavigator();

const GuideHomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="MyGroup"
      screenOptions={{
        tabBarActiveTintColor: '#1261A0',
        tabBarIconStyle: { width: 25, paddingLeft: 5 },
      }}
    >
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
          tabBarIcon: ({ color, size }) => <UserIcon color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="בדיקה לעמוד חדש"
        component={ViewDID}
        options={{
          headerTitle: 'צפיה במשימה',
          tabBarLabel: 'צפיה במשימה',
          headerTitleAlign: 'center',
          headerBackground: CustomBg,
          headerTintColor: '#fff',
          tabBarIcon: ({ color, size }) => <MapIcon name="map" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default GuideHomeTabs;
