import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Text,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import HomeTabs from "../components/HomeTabs";
import axios from "axios";
//import { AsyncStorage } from "react-native-community/async-storage";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSignInPressed = (userLogindetails) => {
    setIsLoading(true);

    // make a GET request to the backend to login and get a JWT
    const { data, error } = getTokenAccess({
      email: "hameorer1@com.com",
      password: "itizk12345",
    });

    if (error) {
      // handle error
      setErrorMessage(error.message);
      setIsLoading(false);
    } else {
      // if the login was successful, the backend should return a JWT
      // save the JWT in local storage so that it can be used for subsequent requests
      // if (data.token) {
      //AsyncStorage.setItem("jwt", data.token)
      //.then(() => {
      // navigate to the home screen or some other protected route
      // setIsLoading(false);
      //  navigation.navigate("HomeTabs");
      //     })
      //     .catch((error) => {
      //       // handle error saving JWT to local storage
      //       setIsLoading(false);
      //     });
      // } else {
      //   // handle login failure
      //   setErrorMessage("Login failed");
      //   setIsLoading(false);
      // }
      // }

      navigation.navigate("HomeTabs");
    }
  };
  function getTokenAccess({ username, password }) {
    // todo in the future move this to cookies
    // todo in the future change the body so i get it as input from the user
    // todo use the refresh token in the future for re login
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = { headers: { "Content-Type": "application/json" } };

    const url =
      "http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/token/";
    const userLoginBody = { email: username, password: password };

    useEffect(() => {
      axios
        .post(url, userLoginBody, headers)
        .then((response) => {
          setData(response.data.access);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    return { data, loading, error };
  }
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