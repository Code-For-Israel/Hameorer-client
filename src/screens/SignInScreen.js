import React from "react";
import {
    View,
    StyleSheet,
    useWindowDimensions,
    ScrollView,

} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";
import HomeTabs from "../components/HomeTabs";

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
        // validate user
        navigation.navigate("HomeTabs");
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    };

    const onSignUpPress = () => {
        navigation.navigate("SignUp");
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <CustomInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{required: "Username is required"}}
                />

                <CustomInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required: "Password is required",
                        minLength: {
                            value: 3,
                            message: "Password should be minimum 3 characters long",
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
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",

        padding: 15,
    },
    logo: {
        width: "70%",
        maxWidth: 300,
        maxHeight: 200,
    },
    title: {
        color: "#072F5F",
        fontSize: 26,
        fontWeight: "bold",
        margin: 10,
    },
});

export default SignInScreen;