import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabs from './HomeTabs';
import SelfGuid from './SheetScreens/Students/SelfGuide';
import Ceremony from './SheetScreens/Students/Ceremoney/Ceremony';
import FamilyMem from './SheetScreens/Students/FamilyMemorey/FamilyMem';
import PersonalDiary from './SheetScreens/Students/PersonalDiary/PersonalDiary';
import DID from './SheetScreens/Students/DID';
import CustomBg from '../components/CustomBg';

const Stack = createStackNavigator();

const MainNav = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeTabs} options={{headerShown: false}} />
            <Stack.Screen name="SelfGuide" component={SelfGuid} options={{headerShown: false}} />
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
                name="PersonalDiary"
                component={PersonalDiary}
                options={{headerTitle: 'כותרת יומן אישי'}}
            />
            <Stack.Screen
                name="DID"
                component={DID}
                options={{
                    headerTitle: 'הוספת דמות', // this is the part of custom background
                    headerTitleAlign: 'center',
                    headerBackground: CustomBg,
                    headerTintColor: '#fff',
                    headerLeft: '', //end of custom background
                }}
            />
        </Stack.Navigator>
    );
};

export default MainNav;
