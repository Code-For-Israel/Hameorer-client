import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CustomBg from "../components/CustomBg";
import HomeTabs from "../components/HomeTabs";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (<Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerTitle: "התחברות",
                    tabBarLabel: "התחברות", // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff", //end of custom background
                    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" color={color} size={size}/>),
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerTitle: "הרשמה",
                    tabBarLabel: "הרשמה", // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff", //end of custom background
                    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" color={color} size={size}/>),
                }}
            />
            <Stack.Screen
                name="ConfirmEmail"
                component={ConfirmEmailScreen}
                options={{
                    headerTitle: "Confirm Email",
                    tabBarLabel: "ConfirmEmail", // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff", //end of custom background
                    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" color={color} size={size}/>),
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={{
                    headerTitle: "שכחתי סיסמה",
                    tabBarLabel: "שכחתי סיסמה", // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff", //end of custom background
                    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" color={color} size={size}/>),
                }}
            />
            <Stack.Screen
                name="NewPassword"
                component={NewPasswordScreen}
                options={{
                    headerTitle: "סיסמה חדשה",
                    tabBarLabel: "סיסמה חדשה", // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff", //end of custom background
                    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="account" color={color} size={size}/>),
                }}
            />
            <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{headerShown: false}}
            />
        </Stack.Navigator>);
};

export default Navigation;
