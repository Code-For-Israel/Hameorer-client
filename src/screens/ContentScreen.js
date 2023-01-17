import {createStackNavigator} from "@react-navigation/stack";
import CustomBg from "../components/CustomBg";
import PageA from "./contentStack/PageA";
import PageB from "./contentStack/PageB";

const Stack = createStackNavigator();

export default function ContentScreen() {
    return (
        <Stack.Navigator initialRouteName="PageA">
            <Stack.Screen
                name="PageA"
                component={PageA}
                options={{
                    headerTitle: "כותרת של עמוד A",
                    // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff",
                    //end of custom background
                }}
            />
            <Stack.Screen
                name="PageB"
                component={PageB}
                options={{
                    headerTitle: "כותרת של עמוד B",
                    // this is the part of custom background
                    headerTitleAlign: "center",
                    headerBackground: CustomBg,
                    headerTintColor: "#fff",
                    //end of custom background
                }}
            />
        </Stack.Navigator>
    );
}
