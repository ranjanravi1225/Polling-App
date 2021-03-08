import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


export default function ScreenHeader(props) {
    return (
        <View style={styles.headerView}>
            <TouchableOpacity style={styles.headerFontIcon} onPress={() => props.navigation.openDrawer()}>
                <FontAwesome name="bars" size={40} />
            </TouchableOpacity>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}> {props.type} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        height: 70,
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
    }
});
