import {ImageBackground, StyleSheet, Text, TextInput, View,} from "react-native";
import React, {useState} from "react";
import LoginHeader from "../../components/LoginHeader";
import {TouchableOpacity} from "react-native-gesture-handler";
import {useDispatch} from "react-redux";
import {loginThunk} from "../../redux/userSlice";

const image = require("../../../assets/loginbg.png");

const Login = () => {
    const [email, setEmail] = useState("hameorer2@com.com");
    const [password, setPassword] = useState("shlomi12345");
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (email && password) {
            dispatch(loginThunk({email, password}));
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <LoginHeader/>
                <View style={styles.login}>
                    <TextInput
                        placeholder="אימייל"
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        placeholder="סיסמא"
                        direction="rtl"
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <View style={styles.subTextView}>
                        <Text style={styles.subText}>* שכחתי סיסמא</Text>
                    </View>
                    <TouchableOpacity onPress={handleLogin}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>כניסה</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    login: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#fff",
        marginBottom: 5,
        marginTop: 20,
        padding: 10,
        textAlign: "right",
        borderRadius: 6,
        width: 180,
        color: "#8B8787",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    subTextView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        width: 180,
    },
    subText: {
        fontSize: 12,
        color: "#000",
    },
    btn: {
        marginTop: 20,
        width: 180,
        backgroundColor: "#1261A0",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 6,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btnText: {
        color: "#FFF",
        fontSize: 14,
    },
});
