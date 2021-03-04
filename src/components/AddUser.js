import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Colors } from './Colors';
import { addUserRequested } from '../Redux/Action/action';
import { connect } from 'react-redux';



const AddUser = (props) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const user = {
        "username": userName,
        "password": password,
        "role": selectedValue,
        "setUserName": setUserName,
        "setPassword": setPassword,
        "setSelectedValue": setSelectedValue,
    }

    return (
        <View style={styles.container}>
            <View >
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 5 }}>
                    <Text style={styles.pickerText}> Role : </Text>
                    <Picker
                        mode='dropdown'
                        placeholder="select role"
                        selectedValue={selectedValue}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label='Select Role' value="0" color={Colors.skyBlue} />
                        <Picker.Item label="Admin" value="admin" />
                        <Picker.Item label="Guest" value="guest" />
                    </Picker>
                </View>
                {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :
                    <TouchableOpacity
                        style={styles.opacitySign}
                        onPress={() => {
                            props.addUserRequested(user);
                        }}
                    >
                        <Text style={styles.opacityText}> Add User </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    picker: {
        height: 40,
        width: 200,
    },
    pickerText: {
        fontSize: 20,
        marginTop: 5,
    },
    opacitySign: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 200,
        alignSelf: 'center',
        backgroundColor: Colors.skyBlue,
        marginTop: 20,
    },
    opacityText: {
        color: Colors.white,
        fontSize: 20,
    },
});



const mapStateToProps = (state) => {
    return {
        isLoading: state.addUser.isLoading,
        isError: state.addUser.isError,
        isSuccess: state.addUser.isSuccess
    }
}

const mapdispatchToProps = (Dispatch) => {
    return {
        addUserRequested: (user) => Dispatch(addUserRequested(user))
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(AddUser);
