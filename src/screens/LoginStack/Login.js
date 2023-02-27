import { ImageBackground, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import LoginHeader from '../../components/LoginHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/userSlice';
import { styles } from '../../styles/PagesStyle';

const image = require('../../../assets/loginbg.png');

const Login = () => {
  // const [email, setEmail] = useState("hameorer1@com.com");
  // const [password, setPassword] = useState("itizk12345");
  const [email, setEmail] = useState('hameorer2@com.com');
  const [password, setPassword] = useState('shlomi12345');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email && password) {
      dispatch(loginThunk({ email, password }));
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
