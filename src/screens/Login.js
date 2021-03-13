import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors } from '../components/Colors';
import { connect } from 'react-redux';
import { loginRequested } from '../Redux/Action/action';
import AsyncStorage from '@react-native-community/async-storage';



const Login = (props) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const user = {
        "username": userName,
        "password": password,
        "navigation": props.navigation,
    }

    useEffect(() => {
        (async () => {
            const username = await AsyncStorage.getItem('username');
            const role = await AsyncStorage.getItem('role');
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <Text style={styles.text}>User Name : </Text>
                <TextInput
                    style={styles.textInput}
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                />
                <Text style={styles.text}>Password : </Text>
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :
                <TouchableOpacity
                    style={styles.opacitySign}
                    onPress={() => {
                        props.loginRequested(user);
                    }}
                >
                    <Text style={styles.opacityText}> Log In </Text>
                </TouchableOpacity>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        margin: 5
    },
    textInput: {
        borderWidth: 1,
        height: 45,
        width: 250,
        margin: 5,
        borderRadius: 10,
        padding: 10,
        fontSize: 20
    },
    opacitySign: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 200,
        alignSelf: 'center',
        backgroundColor: Colors.skyBlue,
        margin: 10,
        marginBottom: 20,
    },
    opacityText: {
        color: Colors.white,
        fontSize: 20,
    },
    lastView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    lastViewText: {
        fontSize: 20,
    },
    lastText: {
        fontSize: 22,
        borderBottomWidth: 1,
        color: Colors.skyBlue,
    }
});


const mapStateToProps = (state) => {
    return {
        isLoading: state.login.isLoading,
        isError: state.login.isError,
        isSuccess: state.login.isSuccess
    }
}

const mapdispatchToProps = (Dispatch) => {
    return {
        loginRequested: (user) => Dispatch(loginRequested(user))
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(Login);
