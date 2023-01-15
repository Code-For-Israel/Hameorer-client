import React, {useEffect, useState} from "react";
import {StyleSheet, ScrollView,} from "react-native";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import {getTokenAccess, getTokenAccessLogin} from "../hooks/ApiCalls/authentication_provider";

const SignInScreen = () => {
    const [userinfo, setUserinfo] = useState(null);
    const navigation = useNavigation();
    const getUserToken = getTokenAccessLogin(userinfo)
    const {register, handleSubmit} = useForm({shouldUseNativeValidation: true});


    useEffect(() => {
        if (getUserToken && getUserToken.data) {
            navigation.navigate("HomeTabs");
        }
    }, [getUserToken]);


    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    };

    const onSignUpPress = () => {
        navigation.navigate("SignUp");
    };

    function onSignInPressed(userFormInfo) {
        setUserinfo(userFormInfo)
    }

    return (<ScrollView showsVerticalScrollIndicator={false}>
        <div style={styles.root}>
            <form style={styles.formContainer} onSubmit={handleSubmit(onSignInPressed)}>
                <input
                    style={styles.inputBox} placeholder={"Email"}
                    {...register("email", {required: "Please enter your email."})}
                />
                <input
                    style={styles.inputBox} placeholder={"password"} type={"password"}
                    {...register("password", {
                        required: "Password is required", minLength: {
                            value: 8, message: "Password should be at least 8 characters long",
                        }
                    })}
                />
                <input type="submit"/>

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
            </form>
        </div>
    </ScrollView>);
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center", width: "100%", display: "flex", justifyContent: "center"
    }, logo: {
        width: "70%", maxWidth: 300, maxHeight: 200,
    }, title: {
        color: "#072F5F", fontSize: 26, fontWeight: "bold", margin: 10,
    }, formContainer: {
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: 5,
    }, inputBox: {
        padding: 10,
        marginBottom: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 5,
    }, input: {
        fontSize: 16, fontFamily: "arial",
    },
});

export default SignInScreen;