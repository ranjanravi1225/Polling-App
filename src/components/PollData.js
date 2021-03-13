import React, { useState, useEffect } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Alert,
    TouchableOpacity
} from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { requestRemovePoll } from '../Redux/Action/action';
import { requestEditTitle, requestRemovePollOption, requestAddNewOption, requestToVote } from '../Redux/Action/action';
import { connect } from "react-redux";
import { Colors } from "./Colors";
import UpdatePollTitle from './UpdatePollTitle';
import NewOptionModal from './/NewOptionModal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';






const PollData = (props) => {

    const [modalValue, setModalValue] = useState(false);
    const [editTitle, setEditTitle] = useState('')
    const [editid, setEditId] = useState('')
    const [newOptionId, setNewOptionId] = useState('')
    const [newOptionModalValue, setNewOptionModalValue] = useState(false);

    const showModal = () => {
        setModalValue(!modalValue);
    }

    const showOptionModal = () => {
        setNewOptionModalValue(!newOptionModalValue);
    }


    const removePollAlert = () =>
        Alert.alert(
            "Confirmation",
            "Do you want to delete this poll?",
            [
                {
                    text: "Cancel",
                },
                { text: "OK", onPress: () => props.requestRemovePoll(props.item._id) }
            ],
            { cancelable: false }
        );

    const updatePollTitle = (title, id) => {
        showModal(true)
        const editPoll = props.pollData.find((e) => e._id == id)
        setEditTitle(editPoll.title)
        setEditId(editPoll._id)
    }

    const getPollKey = (id) => {
        showOptionModal(true)
        const newOption = props.pollData.find((e) => e._id == id)
        setNewOptionId(newOption._id)
    }

    const [role, setRole] = useState('')
    useEffect(() => {
        (async () => {
            if (props.loginStatus) {
                const role = await AsyncStorage.getItem('role');
                setRole(role);
            }
        })();
    }, [props.loginStatus]);

    return (
        <>
            <View style={styles.flatlistView}>
                <View style={{ width: Dimensions.get('window').width - 80, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.lightGray }}>
                        <TouchableOpacity
                            style={{ backgroundColor: Colors.lightGray }}
                            onPress={() => {
                                updatePollTitle(props.item.title, props.item._id)
                            }}
                        >
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}> {props.index} : {props.item.title} </Text>
                        </TouchableOpacity>
                        {role === 'admin' ?
                            <TouchableOpacity
                                onPress={() => {
                                    getPollKey(props.item._id)
                                }}
                            >
                                <AntDesign
                                    name="pluscircleo"
                                    size={20}
                                    color={Colors.skyBlue}
                                />
                            </TouchableOpacity>
                            : null}
                    </View>
                    <FlatList
                        data={props.item.options}
                        keyExtractor={(item, idx) => idx.toString()}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <TouchableOpacity
                                        style={{ marginTop: 10 }}
                                        onPress={() => props.requestToVote(item.option, props.item._id)}
                                    >
                                        <Icon
                                            name="checkbox-blank-circle-outline"
                                            size={20}
                                            color={Colors.skyBlue}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 15, marginTop: 10 }}> {item.option} </Text>
                                </View>
                                {role === 'admin' ?
                                    <TouchableOpacity
                                        style={{ marginTop: 10 }}
                                        onPress={() =>
                                            Alert.alert(
                                                "Confirmation",
                                                "Do you want to delete this Poll Option?",
                                                [
                                                    {
                                                        text: "Cancel",
                                                    },
                                                    { text: "OK", onPress: () => props.requestRemovePollOption(item.option, props.item._id) }
                                                ],
                                                { cancelable: false }
                                            )
                                        }
                                    >
                                        <AntDesign name='delete' size={20} />
                                    </TouchableOpacity>
                                    : null}
                            </View>
                        )}
                    />
                </View>
                <View style={styles.deleteView}>
                    {role === 'admin' ?
                        <TouchableOpacity
                            onPress={removePollAlert}
                        >
                            <AntDesign name='delete' size={35} />
                        </TouchableOpacity>
                        : null}

                </View>
            </View>
            {modalValue && role === 'admin' ? (
                <UpdatePollTitle
                    modalValue={modalValue}
                    setModalValue={setModalValue}
                    showModal={showModal}
                    requestEditTitle={props.requestEditTitle}
                    editTitle={editTitle}
                    editid={editid}
                />
            ) : null}


            {newOptionModalValue ? (
                <NewOptionModal
                    newOptionModalValue={newOptionModalValue}
                    setNewOptionModalValue={setNewOptionModalValue}
                    showOptionModal={showOptionModal}
                    requestAddNewOption={props.requestAddNewOption}
                    newOptionId={newOptionId}
                />
            ) : null}
        </>
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
        pollData: state.allPolls.pollData,
        loginStatus: state.login.isSuccess
    };
};

const mapdispatchToProps = (Dispatch) => {
    return {
        requestRemovePoll: (id) => Dispatch(requestRemovePoll(id)),
        requestEditTitle: (data) => Dispatch(requestEditTitle(data)),
        requestRemovePollOption: (option, id) => Dispatch(requestRemovePollOption(option, id)),
        requestAddNewOption: (data) => Dispatch(requestAddNewOption(data)),
        requestToVote: (optionText, pollId) => Dispatch(requestToVote(optionText, pollId)),

    };
};

export default connect(mapStateToProps, mapdispatchToProps)(PollData);
