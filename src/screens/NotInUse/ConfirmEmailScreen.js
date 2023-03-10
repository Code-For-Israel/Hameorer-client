// import React from 'react';
// import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import CustomInput from '../../components/CustomInput';
// import CustomButton from '../../components/CustomButton';
// import { useForm } from 'react-hook-form';
// import { useNavigation } from '@react-navigation/native';
//
// const ConfirmEmailScreen = () => {
//   const { control, handleSubmit } = useForm();
//
//   const navigation = useNavigation();
//
//   const onConfirmPressed = (data) => {
//     console.warn(data);
//     navigation.navigate('Home');
//   };
//
//   const onSignInPress = () => {
//     navigation.navigate('SignIn');
//   };
//
//   const onResendPress = () => {
//     console.warn('onResendPress');
//   };
//
//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.root}>
//         <Text style={styles.title}>Confirm your email</Text>
//
//         <CustomInput
//           name="code"
//           control={control}
//           placeholder="Enter your confirmation code"
//           rules={{
//             required: 'Confirmation code is required',
//           }}
//         />
//
//         <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />
//
//         <CustomButton text="Resend code" onPress={onResendPress} type="SECONDARY" />
//
//         <CustomButton text="Back to Sign in" onPress={onSignInPress} type="TERTIARY" />
//       </View>
//     </ScrollView>
//   );
// };
//
// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     color: '#072F5F',
//     fontSize: 26,
//     fontWeight: 'bold',
//     margin: 10,
//   },
//   text: {
//     color: 'gray',
//     marginVertical: 10,
//   },
//   link: {
//     color: '#FDB075',
//   },
// });
//
// export default ConfirmEmailScreen;
