import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator, Dimensions, FlatList } from 'react-native';
import { Colors } from './Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";
import { addOption, removeOption, addPollRequested } from '../Redux/Action/action';


const AddPoll = (props) => {

    const [title, setTiltle] = useState('');
    const [optionText, setOptionText] = useState();

    const poll = {
        "title": title,
        "option": props.option,
        "setTiltle": setTiltle
    }

    return (
        <View style={styles.container}>
            <View style={{ borderWidth: 1, height: Dimensions.get('window').height - 150, }}>
                <TextInput
                    style={styles.titleInput}
                    numberOfLines={5}
                    value={title}
                    onChangeText={(text) => setTiltle(text)}
                />
                <View style={{ height: 250 }}>
                    <FlatList
                        data={props.option}
                        renderItem={({ item }) => (
                            <View style={styles.flatlistView}>
                                <Text style={{ fontSize: 15 }}>{item.option}</Text>
                                <TouchableOpacity
                                    onPress={() => props.removeOption(item.key)}
                                >
                                    <Entypo
                                        name="cross"
                                        size={30}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.optionView}>
                    <TextInput
                        style={styles.optionInput}
                        value={optionText}
                        onChangeText={(text) => setOptionText(text)}
                    />
                    <TouchableOpacity
                        style={styles.optionTouchable}
                        onPress={() => {
                            props.addOption(optionText)
                            setOptionText('')
                        }}
                    >
                        <Text style={styles.touchableText}> Add Option </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :

                    <TouchableOpacity
                        style={styles.saveTouchable}
                        onPress={() => {
                            props.addPollRequested(poll)
                        }
                        }
                    >
                        <Text style={styles.saveText}> SAVE POLL </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    titleInput: {
        borderWidth: 1,
        margin: 10,
        width: Dimensions.get('window').width - 50,
        height: 250,
        padding: 15
    },
    flatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 50,
        alignSelf: 'center',
        height: 40,
        alignItems: 'center',
        borderBottomWidth: 1
    },
    optionView: {
        width: Dimensions.get('window').width - 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    optionInput: {
        borderWidth: 1,
        width: 220,
        height: 45,
        fontSize: 20,
        paddingLeft: 10

    },
    optionTouchable: {
        borderWidth: 1,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: Colors.skyBlue,
        width: 100,

    },
    touchableText: {
        color: Colors.white
    },
    saveTouchable: {
        justifyContent: 'center',
        backgroundColor: Colors.skyBlue,
        height: 35,
        marginTop: 5
    },
    saveText: {
        color: Colors.white
    }
});


const mapStateToProps = (state) => {
    return {
        option: state.addPoll.option,
        isLoading: state.addPoll.isLoading
    }
}

const mapdispatchToProps = (Dispatch) => {
    return {
        addOption: (optionText) => Dispatch(addOption(optionText)),
        removeOption: (key) => Dispatch(removeOption(key)),
        addPollRequested: (key) => Dispatch(addPollRequested(key)),
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(AddPoll);
