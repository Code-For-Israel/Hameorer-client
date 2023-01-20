import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import ProfileScreen from "../screens/ProfileScreen";
import MyContentScreen from "../screens/MyContentScreen";
import TimelineScreen from "../screens/TimelineScreen";
import TopicsScreen from "../screens/TopicsScreen";
import MapScreen from "../screens/MapScreen";
import CustomBg from "./CustomBg";

//icons
import UserIcon from "./IconsSvg/UserIcon";
import MyContentIcon from "./IconsSvg/MyContentIcon";
import TimelineIcon from "./IconsSvg/TimelineIcon";
import TopicsIcon from "./IconsSvg/TopicsIcon";
import MapIcon from "./IconsSvg/MapIcon";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={{
                tabBarActiveTintColor: "#1261A0"
            }}
        >
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerTitle: "כאן תהיה הכותרת של פרופיל",
                    tabBarLabel: "פרופיל",
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
            {/* <Tab.Screen
                    name="More"
                    component={PlusScreen}
                    options={{
                        tabBarLabel: "",
                        tabBarButton: (props) => (
                            <TouchableOpacity {...props} onPress={handlePress}/>
                        ),
                        tabBarIcon: ({size}) => (
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: "#FCBF49",
                                    color: "#fff",
                                    position: "absolute",
                                    top: -25,
                                    elevation: 10,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="plus"
                                    size={size}
                                    color={"#fff"}
                                />
                            </View>
                        ),
                    }}
                /> */}
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
