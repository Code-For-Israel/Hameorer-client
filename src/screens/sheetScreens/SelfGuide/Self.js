import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'

const Stack = createStackNavigator();

const Self = () => {
    return (
    <Stack.Navigator initialRouteName="Page1">
      <Stack.Screen name="Page1" component={Page1} options={{ headerTitle: "עמוד ראשון" }} />
      <Stack.Screen name="Page2" component={Page2} options={{ headerTitle: "עמוד שני" }}/>
      <Stack.Screen name="Page3" component={Page3} options={{ headerTitle: "עמוד שלישי" }}/>
      <Stack.Screen name="Page4" component={Page4} options={{ headerTitle: "עמוד רביעי" }}/>
      <Stack.Screen name="Page5" component={Page5} options={{ headerTitle: "עמוד חמישי" }}/>
    </Stack.Navigator>
  );
}

export default Self