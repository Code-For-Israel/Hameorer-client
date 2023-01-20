import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {StatusBar} from "expo-status-bar";

import HomeTabs from "./src/components/HomeTabs";
import SelfGuid from "./src/screens/sheetScreens/SelfGuide";
import DID from "./src/screens/sheetScreens/DID";
import Ceremony from "./src/screens/sheetScreens/Ceremony";
import FamilyMem from "./src/screens/sheetScreens/FamilyMem";
import PersonalDiary from "./src/screens/sheetScreens/PersonalDiary";
import CustomBg from "./src/components/CustomBg";
import Navigation from "./src/navigation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        {/* chnge to home */}
        <Stack.Navigator initialRouteName="sign in">
          {/* this screen is for the tabs navigation at the bottom */}
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          {/* this is for the Bottom Sheet Links menu */}
          <Stack.Screen
            name="sign in"
            headerTitle="sign in"
            component={Navigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelfGuide"
            component={SelfGuid}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ceremony"
            component={Ceremony}
            options={{ headerTitle: "כותרת הכנת טקס" }}
          />
          <Stack.Screen
            name="FamilyMem"
            component={FamilyMem}
            options={{ headerTitle: "כותרת זכרון משפחתי" }}
          />
          <Stack.Screen
            name="PersonalDiary"
            component={PersonalDiary}
            options={{ headerTitle: "כותרת יומן אישי" }}
          />
          <Stack.Screen
            name="DID"
            component={DID}
            options={{
              headerTitle: "הוספת דמות",
              // this is the part of custom background
              headerTitleAlign: "center",
              headerBackground: CustomBg,
              headerTintColor: "#fff",
              //end of custom background
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
