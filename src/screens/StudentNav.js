import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import StudentHomeTabs from './StudentHomeTabs';
import SelfGuid from './SheetScreens/Students/SelfGuide';
import Ceremony from './SheetScreens/Students/Ceremoney/Ceremony';
import FamilyMem from './SheetScreens/Students/FamilyMemorey/FamilyMem';
import PersonalDiary from './SheetScreens/Students/PersonalDiary/PersonalDiary';
import DID from './SheetScreens/Students/DID';
import CustomBg from '../components/CustomBg';
import ViewTaskPolinActivity from './SheetScreens/Students/ViewTaskPolinActivity';
import NewsPage from './SheetScreens/Students/News/NewsPage';
import {logoutThunk} from "../redux/userSlice";
import PrevButton from "../components/NextButton";
import {useDispatch} from "react-redux";

const Stack = createStackNavigator();

const StudentNav = () => {
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

    return (<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={StudentHomeTabs} options={{headerShown: false}}/>
        <Stack.Screen name="SelfGuide" component={SelfGuid} options={{headerShown: false}}/>
        <Stack.Screen
            name="ViewTaskPolinActivity"
            component={ViewTaskPolinActivity}
            options={{headerShown: false, headerRight: () => TopToolbar()}}
        />
        <Stack.Screen
            name="Ceremony"
            component={Ceremony}
            options={{headerTitle: 'כותרת הכנת טקס'}}
        />
        <Stack.Screen
            name="FamilyMem"
            component={FamilyMem}
            options={{headerTitle: 'כותרת זכרון משפחתי'}}
        />
        <Stack.Screen
            name="NewsPage"
            component={NewsPage}
            options={{
                headerStyle: {
                    height: 200, backgroundColor: '#072F5F', borderBottomLeftRadius: 40,
                },
                headerTitle: 'כל הודעות המשלחת',
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerRight: () => TopToolbar()
            }}
        />
        <Stack.Screen
            name="PersonalDiary"
            component={PersonalDiary}
            options={{
                headerTitle: 'כותרת יומן אישי', headerRight: () => TopToolbar()
            }}

        />
        <Stack.Screen
            name="TeamMission"
            component={PersonalDiary}
            options={{headerTitle: 'כותרת משימת צוות', headerRight: () => TopToolbar()}}
        />
        <Stack.Screen
            name="DID"
            component={DID}
            options={{
                headerTitle: 'הוספת דמות', // this is the part of custom background
                headerTitleAlign: 'center', headerBackground: CustomBg, headerTintColor: '#fff', headerLeft: '', //end of custom background
            }}
        />
    </Stack.Navigator>);
};

export default StudentNav;
