import React, { useEffect } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ActivityIndicator,
    Dimensions
} from "react-native";
import { Colors } from "./Colors";
import { connect } from "react-redux";
import { getAllUsers } from '../Redux/Action/action';



const AllUsers = (props) => {

    useEffect(() => {
        props.allUsers();
    }, []);


    return (

        <SafeAreaView style={styles.firstView}>
            {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :
                <FlatList
                    style={{ height: Dimensions.get('window').height - 70, }}
                    data={props.data}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <View style={styles.flatlistView}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Text style={{ fontWeight: 'bold' }}> User Name: </Text>
                                <Text>  {item.username} </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <Text style={{ fontWeight: 'bold' }}> Role: </Text>
                                <Text>  {item.role} </Text>
                            </View>
                        </View>
                    )}
                />
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    firstView: {
        flexDirection: "row",
        justifyContent: "space-around",
    },

    flatlistView: {
        flexDirection: "column",
        justifyContent: 'space-evenly',
        alignItems: "center",
        paddingVertical: 25,
        marginHorizontal: 15,
        height: 150,
        minWidth: 70,
        borderWidth: 1,
        margin: 1,
        borderRadius: 25
    },

    flatlistText: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0.5,
        fontSize: 25,
        minWidth: 335,

    },
    flatlistText1: {
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0.5,
        fontSize: 25,
        minWidth: 330,
    },
});


const mapStateToProps = (state) => {
    return {
        isLoading: state.allUsers.isLoading,
        data: state.allUsers.data
    };
};

const mapdispatchToProps = (Dispatch) => {
    return {
        allUsers: () => Dispatch(getAllUsers())
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(AllUsers);
