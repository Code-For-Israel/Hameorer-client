import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ForgotPass from "./ForgotPass";
// import Loading from "./Loading";
import Login from "./Login";
import SignUp from "./SignUp";

const Stack = createStackNavigator();

const AuthRouter = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      {/* <Stack.Screen name="Loading" component={Loading} /> */}
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthRouter;