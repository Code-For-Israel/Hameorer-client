import React, {useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {TouchableOpacity, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import TimelineScreen from "../screens/TimelineScreen";
import PlusScreen from "../screens/PlusScreen";
import ContentScreen from "../screens/ContentScreen";
import MapScreen from "../screens/MapScreen";

import BottomSheet from "./BottomSheet";
import BottomMenuContent from "./BottomMenuContent";
import CustomBg from "../components/CustomBg";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePress = () => {
        setIsModalVisible(true);
    };
    const onModalClose = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Tab.Navigator
                initialRouteName="Profile"
                screenOptions={{
                    tabBarActiveTintColor: "#1261A0",
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
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />
                        ),
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
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons
                                name="timeline-clock"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
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
                />
                <Tab.Screen
                    name="Content"
                    component={ContentScreen}
                    options={{
                        headerShown: false,
                        headerTitle: "כאן תהיה הכותרת של תוכן",
                        tabBarLabel: "תוכן",
                        headerTitleAlign: "center",
                        headerBackground: CustomBg,
                        headerTintColor: "#fff",
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons
                                name="file-document"
                                color={color}
                                size={size}
                            />
                        ),
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
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="map" color={color} size={size}/>
                        ),
                    }}
                />
            </Tab.Navigator>
            {/* this is for the bottom sheet menu */}
            <BottomSheet isVisible={isModalVisible} onClose={onModalClose}>
                <BottomMenuContent onClose={onModalClose}/>
            </BottomSheet>
        </>
    );
};

export default HomeTabs;
