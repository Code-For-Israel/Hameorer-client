import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import DIDPageA from "./DIDStack/DIDPageA";
import DIDPageB from "./DIDStack/DIDPageB";
import DIDPageC from "./DIDStack/DIDPageC";
import DIDPageD from "./DIDStack/DIDPageD";
import DIDPageE from "./DIDStack/DIDPageE";


const DIDStack = createStackNavigator();

export default function DID() {
    return (
        <DIDStack.Navigator initialRouteName="DIDPageB">
            <DIDStack.Screen
                name="DIDPageA"
                component={DIDPageA}
                options={{headerShown: false}}
            />
            <DIDStack.Screen
                name="DIDPageB"
                component={DIDPageB}
                options={{headerShown: false}}
            />
            <DIDStack.Screen
                name="DIDPageC"
                component={DIDPageC}
                options={{headerShown: false}}
            />
            <DIDStack.Screen
                name="DIDPageD"
                component={DIDPageD}
                options={{headerShown: false}}
            />
            <DIDStack.Screen
                name="DIDPageE"
                component={DIDPageE}
                options={{headerShown: false}}
            />
        </DIDStack.Navigator>
    );
}