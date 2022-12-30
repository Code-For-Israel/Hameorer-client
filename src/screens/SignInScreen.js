import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Text,
  AsyncStorage,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import HomeTabs from "../components/HomeTabs";
import axios from "axios";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = (data) => {
    setIsLoading(true);

    // make a request to your backend to get the JWT
    axios
      .post("http://your-backend.com/login", {
        username,
        password,
      })
      .then((response) => {
        // if the login was successful, the backend should return a JWT
        // save the JWT in local storage or in redux so that it can be used for subsequent requests
        if (response.data.token) {
          AsyncStorage.setItem("jwt", response.data.token)
            .then(() => {
              // navigate to the home screen or some other protected route
              setIsLoading(false);
            })
            .catch((error) => {
              // handle error saving JWT to local storage
              setIsLoading(false);
            });
        } else {
          // handle login failure
          setErrorMessage("Invalid username or password");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        // handle any errors that occur during the login request
        setErrorMessage(error.message);
        setIsLoading(false);
      });

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
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <CustomInput
          name="username"
          placeholder="שם משתמש"
          control={control}
          value={username}
          onChangeText={setUsername}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          name="password"
          placeholder="סיסמה"
          value={password}
          onChangeText={setPassword}
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
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : (
          <CustomButton text="התחבר" onPress={handleSubmit(onSignInPressed)} />
        )}

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
