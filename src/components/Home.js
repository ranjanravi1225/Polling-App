import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../components/Colors';
import AddUser from './AddUser';
import AllUsers from './AllUsers';
import AllPolls from './AllPolls';
import ScreenHeader from './ScreenHeader';
import AddPoll from './AddPoll';
import { connect } from "react-redux";




const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.profileView}>
                    <FontAwesome5 name="user-alt" size={25} />
                    <Text style={{ fontSize: 20 }}> Hello, </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> {props.name} </Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={styles.logOutTouchable}
                onPress={async () => {
                    props.navigation.navigate('Login')
                    await AsyncStorage.clear();
                }
                }
            >
                <Text style={styles.logOutText}> Log Out </Text>
            </TouchableOpacity>
        </View>
    );
}


const addUser = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader navigation={navigation} type="Add User" />
            <AddUser />
        </SafeAreaView>
    )
}


const allUsers = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader navigation={navigation} type="All Users" />
            <AllUsers />
        </SafeAreaView>
    )
}


const addPoll = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader navigation={navigation} type="Add Poll" />
            <AddPoll />
        </SafeAreaView>
    )
}

const allPolls = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScreenHeader navigation={navigation} type="All Polls" />
            <AllPolls />
        </SafeAreaView>
    )
}


const Home = (props) => {

    const [role, setRole] = useState('')
    const [name, setName] = useState();

    useEffect(() => {
        (async () => {
            if (props.loginStatus) {
                const role = await AsyncStorage.getItem('role');
                const username = await AsyncStorage.getItem('username');
                setName(username);
                setRole(role);
            }
        })();
    }, [props.loginStatus]);

    useEffect(() => {
        (async () => {
            const role = await AsyncStorage.getItem('role');
            const username = await AsyncStorage.getItem('username');
            setName(username);
            setRole(role);
        })();
    }, []);


    return (
        <Drawer.Navigator initialRouteName="All Polls" drawerContent={props => <CustomDrawerContent {...props} name={name} />}>
            {role === 'admin' ?
                <Drawer.Screen name="Add User" component={addUser} />
                : null}
            <Drawer.Screen name="All Users" component={allUsers} />
            {role === 'admin' ?
                <Drawer.Screen name="Add Poll" component={addPoll} />
                : null}
            <Drawer.Screen name="All Polls" component={allPolls} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    profileView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        minHeight: 100,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 5,
        margin: 5
    },
    logOutTouchable: {
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        borderWidth: 1,
        backgroundColor: Colors.skyBlue,
        height: 30,
        width: 100
    },
    logOutText: {
        fontSize: 20,
        color: Colors.white
    }
})

const mapStateToProps = (state) => {

    return {
        loginStatus: state.login.isSuccess
    };
};

export default connect(mapStateToProps, null)(Home);
