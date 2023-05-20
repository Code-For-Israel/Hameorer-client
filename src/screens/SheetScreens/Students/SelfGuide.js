import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Page1 from './SelfGuide/Page1';
import Page2 from './SelfGuide/Page2';
import Page3 from './SelfGuide/Page3';
import Page4 from './SelfGuide/Page4';
import Page5 from './SelfGuide/Page5';
import IndexPage from './SelfGuide/IndexPage';
import {useDispatch} from "react-redux";
import {View} from "react-native";
import PrevButton from "../../../components/NextButton";
import {logoutThunk} from "../../../redux/userSlice";


const SelfGuideStack = createStackNavigator();

export default function SelfGuid() {
    const dispatch = useDispatch();

    const TopToolbar = () => (
        <View style={{marginRight: 10}}>
            <PrevButton title={'התנתק'} onPress={() => dispatch(logoutThunk())}/>
        </View>
    );

    const screenOptions = {
        headerStyle: {
            height: 200,
            backgroundColor: '#072F5F',
            borderBottomLeftRadius: 40,
        },
        headerTitle: 'הדרכה עצמית',
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerRight: () => <TopToolbar/>,
    };

    const screens = [
        {name: 'IndexPage', component: IndexPage},
        {name: 'Page1', component: Page1},
        {name: 'Page2', component: Page2},
        {name: 'Page3', component: Page3},
        {name: 'Page4', component: Page4},
        {name: 'Page5', component: Page5},
    ];

    return (
        <SelfGuideStack.Navigator>
            {screens.map((screen) => (
                <SelfGuideStack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={screenOptions}
                />
            ))}
        </SelfGuideStack.Navigator>
    );
}
