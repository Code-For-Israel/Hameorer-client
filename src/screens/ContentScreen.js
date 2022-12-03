import { createStackNavigator } from "@react-navigation/stack";
import { PageA } from "./PageA";
import { PageB } from "./PageB";

const Stack = createStackNavigator();

export function ContentScreen() {
  return (
    <Stack.Navigator initialRouteName="PageA">
      <Stack.Screen name="PageA" component={PageA} />
      <Stack.Screen name="PageB" component={PageB} />
    </Stack.Navigator>
  );
}
