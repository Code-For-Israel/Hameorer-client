import React, {useEffect, useState} from "react";
import {Text, StyleSheet, ScrollView} from "react-native";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import UseFetchPost from "./../hooks/ApiCalls/useFetchPost"
import getSiteUrl from "../utils/getSiteUrl";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {

    const url = getSiteUrl() + 'v1/authentication/user/'
    const [userRegisterInfo, setUserRegisterInfo] = useState(null);
    const userRegisterResponse = UseFetchPost(url, userRegisterInfo)
    const {watch, register, handleSubmit, formState: {errors}} = useForm({shouldUseNativeValidation: true});

    const pwd = watch("password");
    const navigation = useNavigation();

    useEffect(() => {
        if (userRegisterResponse && userRegisterResponse.data) {
            navigation.navigate("ConfirmEmail");
        }
    }, [userRegisterResponse]);


    const onRegisterPressed = (userInfo) => {
        setUserRegisterInfo(userInfo)
    };

    const onSignInPress = () => {
        navigation.navigate("SignIn");
    };

    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");
    };

    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    };

    return (<ScrollView showsVerticalScrollIndicator={false}>
        <div style={styles.root}>
            <form style={styles.formContainer} onSubmit={handleSubmit(onRegisterPressed)}>
                <input
                    style={styles.inputBox} placeholder={"username"}
                    {...register("username", {
                        required: "Username is required", minLength: {
                            value: 3, message: "Username should be at least 3 characters long",
                        }, maxLength: {
                            value: 24, message: "Username should be max 24 characters long",
                        },
                    })}
                />
                <input
                    style={styles.inputBox} placeholder={"email"}
                    {...register("email", {
                        required: "Email is required", pattern: {value: EMAIL_REGEX, message: "Email is invalid"}
                    })}
                />

                <input
                    style={styles.inputBox} placeholder={"password"} type={"password"}
                    {...register("password", {
                        required: "Password is required", minLength: {
                            value: 8, message: "Password should be at least 8 characters long",
                        }
                    })}
                />

                <input
                    style={styles.inputBox} placeholder={"password repeat"} type={"password"}
                    {...register("password_repeat", {
                        required: "Password repeat is required", minLength: {
                            value: 8, message: "Password should be at least 8 characters long",
                        },
                        validate: {
                            confirmPass: value => value === pwd
                        }
                    })}
                />
                {errors.password_repeat && errors.password_repeat.type === "confirmPass" &&
                    <Text style={styles.passwordWarn}>
                        Please Confirm Passwords Match
                    </Text>
                }

                <input type="submit"/>

                <Text style={styles.text}>
                    By registering, you confirm that you accept our{" "}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{" "}
                    and{" "}
                    <Text style={styles.link} onPress={onPrivacyPressed}>
                        Privacy Policy
                    </Text>
                </Text>

                <CustomButton
                    text="Have an account? Sign in"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />
            </form>
        </div>
    </ScrollView>);
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center", width: "100%", display: "flex", justifyContent: "center"
    }, title: {
        color: "#072F5F", fontSize: 26, fontWeight: "bold", margin: 10,
    }, text: {
        color: "gray", marginVertical: 10,
    }, link: {
        color: "#FDB075",
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
    }, passwordWarn: {
        color: "red",
        alignSelf: "center",
        alignContent: "center",
        padding: 5
    }
});

export default SignUpScreen;
