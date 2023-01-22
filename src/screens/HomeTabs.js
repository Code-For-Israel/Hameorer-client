import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ProfileScreen from "./ProfileScreen";
import MyContentScreen from "./MyContentScreen";
import TimelineScreen from "./TimelineScreen";
import TopicsScreen from "./TopicsScreen";
import MapScreen from "./MapScreen";
import CustomBg from "../components/CustomBg";

//icons
import UserIcon from "../components/IconsSvg/UserIcon";
import MyContentIcon from "../components/IconsSvg/MyContentIcon";
import TimelineIcon from "../components/IconsSvg/TimelineIcon";
import TopicsIcon from "../components/IconsSvg/TopicsIcon";
import MapIcon from "../components/IconsSvg/MapIcon";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                tabBarActiveTintColor: "#1261A0",
                tabBarIconStyle: {width: 25, paddingLeft: 5},
            }}
        >
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: "כאן תהיה הכותרת של פרופיל",
                    tabBarLabel: "העמוד שלי",
                    // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff",
                    //end of custom background
                    tabBarIcon: ({color, size}) =>
                        <UserIcon color={color} size={size}/>
                }}
            />
            <Tab.Screen
                name="MyContent"
                component={MyContentScreen}
                options={{
                    headerTitle: "התוכן שלי",
                    tabBarLabel: "התוכן שלי",
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff",
                    tabBarIcon: ({color, size}) =>
                        <MyContentIcon color={color} size={size}/>
                }}
            />
            <Tab.Screen
                name="Timeline"
                component={TimelineScreen}
                options={{
                    headerTitle: "כאן תהיה הכותרת של ציר זמן",
                    tabBarLabel: "ציר זמן",
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff",
                    tabBarIcon: ({color, size}) =>
                        <TimelineIcon color={color} size={size}/>
                }}
            />
            <Tab.Screen
                name="Topics"
                component={TopicsScreen}
                options={{
                    // headerShown: false,
                    headerTitle: "כאן תהיה הכותרת של נושאים",
                    tabBarLabel: "נושאים",
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff",
                    tabBarIcon: ({color, size}) =>
                        <TopicsIcon color={color} size={size}/>
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                    headerTitle: "כאן תהיה הכותרת של מפה",
                    tabBarLabel: "מפה",
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff",
                    tabBarIcon: ({color, size}) =>
                        <MapIcon name="map" color={color} size={size}/>
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeTabs;
