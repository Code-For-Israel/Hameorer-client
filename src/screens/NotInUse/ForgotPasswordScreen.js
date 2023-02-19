import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";

const ForgotPasswordScreen = () => {
    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onSendPressed = (data) => {
        console.warn(data);
        navigation.navigate("NewPassword");
    };

    const onSignInPress = () => {
        navigation.navigate("SignIn");
    };

    return (<ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <CustomInput
                name="username"
                control={control}
                placeholder="שם משתמש"
                rules={{
                    required: "Username is required",
                }}
            />

            <CustomButton text="שלח" onPress={handleSubmit(onSendPressed)}/>

            <CustomButton
                text="Back to Sign in"
                onPress={onSignInPress}
                type="TERTIARY"
            />
        </View>
    </ScrollView>);
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center", padding: 20,
    }, title: {
        color: "#072F5F", fontSize: 26, fontWeight: "bold", margin: 10,
    }, text: {
        color: "gray", marginVertical: 10,
    }, link: {
        color: "#FDB075",
    },
});

export default ForgotPasswordScreen;
