// import React, {useEffect, useState} from "react";
// import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
// import CustomInput from "../../components/CustomInput";
// import CustomButton from "../../components/CustomButton";
// import {useNavigation} from "@react-navigation/native";
// import {useForm} from "react-hook-form";
// import StudentHomeTabs from "../StudentHomeTabs";
// import {getTokenAccessLogin} from "../../hooks/ApiCalls/";
//
// const SignInScreen = () => {
//     const [userinfo, setUserinfo] = useState();
//     const navigation = useNavigation();
//     const getUserToken = getTokenAccessLogin(userinfo)
//
//     useEffect(() => {
//         if (getUserToken.data) {
//             navigation.navigate("StudentHomeTabs");
//         }
//     }, [getUserToken]);
//
//     const {control, handleSubmit,} = useForm();
//
//     const onSignInPressed = (data) => {
//         setUserinfo(data)
//     };
//
//     const onForgotPasswordPressed = () => {
//         navigation.navigate("ForgotPassword");
//     };
//
//     const onSignUpPress = () => {
//         navigation.navigate("SignUp");
//     };
//
//     const autoLogIn = () => {
//         setUserinfo({email: 'hameorer1@com.com', password: 'itizk12345'})
//     }
//
//     return (<ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.root}>
//             <Text> in the future remove from here the easy log in</Text>
//             <Button onPress={autoLogIn} title="click here to auto login"></Button>
//             <CustomInput
//                 name="email"
//                 placeholder="email"
//                 control={control}
//                 rules={{required: "email is required"}}
//             />
//
//             <CustomInput
//                 name="password"
//                 placeholder="Password"
//                 secureTextEntry
//                 control={control}
//                 rules={{
//                     required: "Password is required", minLength: {
//                         value: 3, message: "Password should be minimum 3 characters long",
//                     },
//                 }}
//             />
//
//             <CustomButton disable={getUserToken && getUserToken.loading} text="Sign In"
//                           onPress={handleSubmit(onSignInPressed)}/>
//
//             {getUserToken && getUserToken.loading ? (<Text>logging in...</Text>) : (<Text></Text>)}
//             {getUserToken && getUserToken.error ? (<Text>Failed to log in</Text>) : (<Text></Text>)}
//             <CustomButton
//                 text="Forgot password?"
//                 onPress={onForgotPasswordPressed}
//                 type="TERTIARY"
//             />
//             <CustomButton
//                 text="Don't have an account? Create one"
//                 onPress={onSignUpPress}
//                 type="TERTIARY"
//             />
//         </View>
//     </ScrollView>);
// };
//
// const styles = StyleSheet.create({
//     root: {
//         alignItems: "center",
//
//         padding: 15,
//     }, logo: {
//         width: "70%"
//     }, title: {
//         color: "#072F5F", fontSize: 26, fontWeight: "bold", margin: 10,
//     },
// });
//
// export default SignInScreen;
