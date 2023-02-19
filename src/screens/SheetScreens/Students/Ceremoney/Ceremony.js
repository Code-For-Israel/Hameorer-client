import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const Ceremony = () => {
    return (<View style={styles.container}>
        <Text>עמוד הכנת טקס</Text>
    </View>)
}

export default Ceremony

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }
})


// import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import React, { useEffect, useState } from "react";

// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   loginThunk,
//   refreshAccess,
//   selectAccess,
//   selectRefresh,
//   setAccess,
//   setRefresh,
//   setLoading,
// } from "../../redux/userSlice"; //note the path
// import { getStories } from "../../redux/dataSlice";

// const Ceremony = () => {
//   const [email, setEmail] = useState("hameorer2@com.com");
//   const [password, setPassword] = useState("shlomi12345");

//   const dispatch = useDispatch();
//   const refresh = useSelector(selectRefresh);
//   const access = useSelector(selectAccess);

//   const [local, setLocal] = useState("");

//   const handleLogin = () => {
//     if (email && password) {
//       dispatch(loginThunk({ email, password }));
//     }
//   };
//   const refreshToken = () => {
//     dispatch(refreshAccess(refresh));
//   };
//   const getData = () => {
//     dispatch(getStories(access));
//   };

//   useEffect(() => {
//     const getLocal = async () => {
//       try {
//         const value = await AsyncStorage.getItem("refreshToken");
//         if (value !== null) {
//           // dispatch(getStories(value));
//           // dispatch(setAccess(value));
//           dispatch(setRefresh(value));

//           dispatch(setLoading(false));
//           setLocal(value);
//         } else {
//           throw "There is No Token in Local Storage";
//         }
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     getLocal();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Redux</Text>
//       <TextInput
//         placeholder="email"
//         style={styles.input}
//         onChangeText={setEmail}
//         value={email}
//       />
//       <TextInput
//         placeholder="password"
//         style={styles.input}
//         onChangeText={setPassword}
//         value={password}
//       />

//       <Button onPress={handleLogin} title="Login" accessibilityLabel="Log in" />
//       <Text>---</Text>
//       <Button
//         onPress={refreshToken}
//         title="Refresh"
//         accessibilityLabel="Refresh"
//       />
//       <Text>---</Text>
//       <Button
//         onPress={getData}
//         title="Get data from backend"
//         accessibilityLabel="Get Data"
//       />
//       <Text>---</Text>
//       <Text>Local Storage : {local}</Text>
//       <Text>access {access}</Text>
//       <Text>refresh {refresh}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     backgroundColor: "#fff",
//     marginBottom: 10,
//   },
// });

// export default Ceremony;
