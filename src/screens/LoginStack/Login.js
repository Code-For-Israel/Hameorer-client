import {ImageBackground, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import LoginHeader from '../../components/LoginHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {loginThunk} from '../../redux/userSlice';
import {styles} from '../../styles/PagesStyle';

const image = require('../../../assets/loginbg.png');

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = () => {
        if (email && password) {
            dispatch(loginThunk({email, password}));
        }
    };

    const handleAutoLogin = (type) => {
        if (type === 'guide') {
            setEmail('hameorer1@com.com');
            setPassword('itizk12345');
            handleLogin();
        } else {
            setEmail('hameorer2@com.com');
            setPassword('shlomi12345');
            handleLogin();
        }
    };

    return (
        <View style={styles.mainContainer}>
            <ImageBackground source={image} style={styles.image}>
                <LoginHeader />
                <View style={styles.container}>
                    <TextInput
                        placeholder="אימייל"
                        style={styles.loginInput}
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        placeholder="סיסמא"
                        direction="rtl"
                        style={styles.loginInput}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <View style={styles.loginSubTextView}>
                        <Text style={styles.loginSubText}>* שכחתי סיסמא</Text>
                    </View>
                    <TouchableOpacity onPress={() => handleAutoLogin('guide')}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.loginBtnText}>התחבר כמדריך</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAutoLogin('student')}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.loginBtnText}>התחבר כתלמיד</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin}>
                        <View style={styles.loginBtn}>
                            <Text style={styles.loginBtnText}>כניסה</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Login;
