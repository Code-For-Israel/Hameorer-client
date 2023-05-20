import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyGroupSummary from './SheetScreens/Guides/MyGroupSummary';
import MyGroupFigure from './SheetScreens/Guides/MyGroupFigure';
import ViewDID from './SheetScreens/Guides/ViewDID';
import MyGroupSummaryByUser from './SheetScreens/Guides/MyGroupSummaryByUser';
import SelfGuidAdmin from './SheetScreens/Guides/SelfGuidAdmin';
import {useDispatch} from "react-redux";
import {View} from "react-native";
import PrevButton from "../components/NextButton";
import {logoutThunk} from "../redux/userSlice";
import GroupSummaryIcon from "../components/IconsSvg/GroupSummaryIcon";
import AdminDidIcon from "../components/IconsSvg/AdminDidIcon";
import SelfGuideIcon from "../components/IconsSvg/SelfGuideIcon";
import AdminTeamReportIcon from "../components/IconsSvg/AdminTeamReportIcon";

const Tab = createBottomTabNavigator();

const GuideHomeTabs = () => {
    const commonOptions = {
        headerStyle: {
            height: 150, backgroundColor: '#072F5F', borderBottomLeftRadius: 40,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerRight: () => TopToolbar()

    };

    const dispatch = useDispatch();

    function TopToolbar() {
        return <>
            <View style={{marginRight: 10}}>
                <PrevButton
                    title={'התנתק'}
                    onPress={() => dispatch(logoutThunk())}
                ></PrevButton>
            </View>
        </>;
    }

    const screens = [
        {
            name: 'MyGroupFigure',
            component: MyGroupFigure,
            label: 'DID',
            title: 'DID',
            icon: AdminDidIcon,
        },
        {
            name: 'SelfGuidAdmin',
            component: SelfGuidAdmin,
            label: 'הדרכה עצמית',
            title: 'הדרכה עצמית',
            icon: SelfGuideIcon,
        },
        {
            name: 'MyGroupSummary',
            component: MyGroupSummary,
            label: 'סיכום הקבוצה שלי',
            title: 'סיכום הקבוצה שלי',
            icon: GroupSummaryIcon,
        },
        {
            name: 'MyGroupSummaryByUser',
            component: MyGroupSummaryByUser,
            label: 'דו"ח קבוצה',
            title: 'דו"ח קבוצה',
            icon: AdminTeamReportIcon,
        },
        {
            name: 'ViewDID',
            component: ViewDID,
            label: 'צפיה במשימה',
            title: 'צפיה במשימה',
            icon: AdminDidIcon,
        },
    ];

    return (
        <Tab.Navigator
            initialRouteName="MyGroupFigure"
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
                        tabBarIcon: ({color, size}) => <screen.icon color={color} size={size} />,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default GuideHomeTabs;
