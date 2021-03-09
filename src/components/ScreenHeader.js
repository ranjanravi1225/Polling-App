import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { connect } from "react-redux";
import { Colors } from "./Colors";



const ScreenHeader = (props) => {
    return (
        <View style={styles.headerView}>
            <TouchableOpacity style={styles.headerFontIcon} onPress={() => props.navigation.openDrawer()}>
                <FontAwesome name="bars" size={40} />
            </TouchableOpacity>
            <View style={props.isLoading ? styles.headerTextView : styles.headerTextView1}>
                <Text style={styles.headerText}> {props.type} </Text>
            </View>

            {props.isLoading ?
                <View style={styles.loaderView}>
                    <ActivityIndicator size={50} color={Colors.skyBlue} />
                </View>
                : null}
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
    },
    headerTextView1: {
        justifyContent: 'center',
        marginRight: 150,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    loaderView: {
        height: 40,
        width: 50,
        alignSelf: 'center',
        alignItems: 'center'
    }
});


const mapStateToProps = (state) => {
    return {
        isLoading: state.removePoll.isLoading,
    };
};

export default connect(mapStateToProps, null)(ScreenHeader);
