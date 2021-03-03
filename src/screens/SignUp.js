// import React, { useState } from 'react';
// import { StyleSheet, TextInput, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { Colors } from '../components/Colors';
// import { connect } from 'react-redux';
// import { signUpRequested } from '../Redux/Action/action';


// const SignUp = (props) => {

//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const user = {
//         "username": userName,
//         "password": password,
//         "confirmPassword": confirmPassword
//     }

//     // const signUp = () => {
//     //     navigation.navigate('Home');
//     // }

//     return (
//         <View style={styles.container}>
//             <View style={styles.innerView}>
//                 <Text style={styles.text}>User Name: </Text>
//                 <TextInput
//                     style={styles.textInput}
//                     value={userName}
//                     onChangeText={(text) => setUserName(text)}
//                 />
//                 <Text style={styles.text}>Password : </Text>
//                 <TextInput
//                     style={styles.textInput}
//                     value={password}
//                     onChangeText={(text) => setPassword(text)}
//                 />
//                 <Text style={styles.text}> Confirm Password : </Text>
//                 <TextInput
//                     style={styles.textInput}
//                     value={confirmPassword}
//                     onChangeText={(text) => setConfirmPassword(text)}
//                 />
//             </View>
//             {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :

//                 <TouchableOpacity
//                     style={styles.opacitySign}
//                     onPress={() => props.signUpRequested(user)}
//                 >
//                     <Text style={styles.opacityText}> Sign Up </Text>
//                 </TouchableOpacity>
//             }
//             <View style={styles.lastView}>
//                 <Text style={styles.lastViewText}> Already have an account ? </Text>
//                 <Text
//                     style={styles.lastText}
//                     onPress={() => props.navigation.navigate('Login')}
//                 >
//                     Log In
//                 </Text>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     innerView: {

//     },
//     text: {
//         fontSize: 20,
//         margin: 5
//     },
//     textInput: {
//         borderWidth: 1,
//         height: 45,
//         width: 250,
//         margin: 5,
//         borderRadius: 10,
//         padding: 10,
//         fontSize: 20
//     },
//     opacitySign: {
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 20,
//         width: 200,
//         alignSelf: 'center',
//         backgroundColor: Colors.skyBlue,
//         margin: 10,
//         marginBottom: 20,
//     },
//     opacityText: {
//         color: Colors.white,
//         fontSize: 20,
//     },
//     lastView: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     lastViewText: {
//         fontSize: 20,
//     },
//     lastText: {
//         fontSize: 22,
//         borderBottomWidth: 1,
//         color: Colors.skyBlue,
//     }
// });


// const mapStateToProps = (state) => {
//     console.log(state, 'qqqqqqqq');
//     return {
//         isLoading: state.signup.isLoading,
//         isError: state.signup.isError,
//         isSuccess: state.signup.isSuccess
//     }
// }

// const mapdispatchToProps = (Dispatch) => {
//     return {
//         signUpRequested: (user) => Dispatch(signUpRequested(user))
//     }
// }

// export default connect(mapStateToProps, mapdispatchToProps)(SignUp);
