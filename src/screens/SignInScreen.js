import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, View,} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import HomeTabs from "../components/HomeTabs";
import {getTokenAccessLogin} from "../hooks/ApiCalls/authentication_provider";

const SignInScreen = () => {
    const [userinfo, setUserinfo] = useState(null);
    const navigation = useNavigation();
    const getUserToken = getTokenAccessLogin(userinfo)

    useEffect(() => {
        if (getUserToken.data) {
            console.log(getUserToken)
            console.log(userinfo)
            navigation.navigate("HomeTabs");
        }
    }, [getUserToken]);

    const {control, handleSubmit, formState: {errors},} = useForm();

    const onSignInPressed = (data) => {
        setUserinfo(data)
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    };

    const onSignUpPress = () => {
        navigation.navigate("SignUp");
    };

    return (<ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <CustomInput
                name="email"
                placeholder="email"
                control={control}
                rules={{required: "email is required"}}
            />

            <CustomInput
                name="password"
                placeholder="Password"
                secureTextEntry
                control={control}
                rules={{
                    required: "Password is required", minLength: {
                        value: 3, message: "Password should be minimum 3 characters long",
                    },
                }}
            />

            <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)}/>

            <CustomButton
                text="Forgot password?"
                onPress={onForgotPasswordPressed}
                type="TERTIARY"
            />

            <CustomButton
                text="Don't have an account? Create one"
                onPress={onSignUpPress}
                type="TERTIARY"
            />
        </View>
    </ScrollView>);
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",

        padding: 15,
    }, logo: {
        width: "70%", maxWidth: 300, maxHeight: 200,
    }, title: {
        color: "#072F5F", fontSize: 26, fontWeight: "bold", margin: 10,
    },
});

export default SignInScreen;