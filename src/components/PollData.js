import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    Alert
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { requestRemovePoll } from '../Redux/Action/action';
import { connect } from "react-redux";
import { Colors } from "./Colors";



const PollData = (props) => {

    const removePollAlert = () =>
        Alert.alert(
            "Confirmation",
            "Do you want to delete this poll?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                },
                { text: "OK", onPress: () => props.requestRemovePoll(props.item._id) }
            ],
            { cancelable: false }
        );

    return (
        <View style={styles.flatlistView}>
            <View style={{ width: Dimensions.get('window').width - 80, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> {props.index} : {props.item.title} </Text>
                <FlatList
                    data={props.item.options}
                    keyExtractor={(item, idx) => idx.toString()}
                    renderItem={({ item, index }) => (
                        <Text style={{ fontSize: 15, margin: 5 }}> {index + 1}: {item.option} </Text>
                    )}
                />
            </View>
            <View style={styles.deleteView}>
                <TouchableOpacity
                    onPress={removePollAlert}
                >
                    <AntDesign name='delete' size={35} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flatlistView: {
        flexDirection: 'row',
        minHeight: 70,
        minWidth: 70,
        borderBottomWidth: 1,
        paddingLeft: 10
    },
    deleteView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
});

const mapStateToProps = (state) => {
    return {
        isLoading: state.removePoll.isLoading,
    };
};

const mapdispatchToProps = (Dispatch) => {
    return {
        requestRemovePoll: (id) => Dispatch(requestRemovePoll(id))
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(PollData);
