import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../components/Colors';
import AddUser from './AddUser';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {

    const [name, setName] = useState();

    useEffect(() => {
        (async () => {
            const username = await AsyncStorage.getItem('username');
            setName(username);
        })();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.profileView}>
                    <FontAwesome5 name="user-alt" size={25} />
                    <Text style={{ fontSize: 20 }}> Hello, </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> {name} </Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={styles.logOutTouchable}
                onPress={async () => {
                    await AsyncStorage.clear();
                    props.navigation.navigate('Login')
                }
                }
            >
                <Text style={styles.logOutText}> Log Out </Text>
            </TouchableOpacity>
        </View>
    );
}

const MyDrawer = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerFontIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="bars" size={40} />
                </TouchableOpacity>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> Home </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const addUser = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerFontIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="bars" size={40} />
                </TouchableOpacity>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> Add User </Text>
                </View>
            </View>
            <AddUser />
        </SafeAreaView>
    )
}


const allUsers = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerFontIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="bars" size={40} />
                </TouchableOpacity>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> All Users </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


const addPoll = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerFontIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="bars" size={40} />
                </TouchableOpacity>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> Add Poll </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const allPolls = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.headerFontIcon} onPress={() => navigation.openDrawer()}>
                    <FontAwesome name="bars" size={40} />
                </TouchableOpacity>
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> All Polls </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default function Home() {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={MyDrawer} />
            <Drawer.Screen name="Add User" component={addUser} />
            <Drawer.Screen name="All Users" component={allUsers} />
            <Drawer.Screen name="Add Poll" component={addPoll} />
            <Drawer.Screen name="All Polls" component={allPolls} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
    headerView: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        minHeight: 70,
    },
    headerFontIcon: {
        alignSelf: 'center',
        marginLeft: 5
    },
    headerTextView: {
        justifyContent: 'center',
        marginRight: 150,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
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
