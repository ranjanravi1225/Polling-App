import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ActivityIndicator
} from "react-native";
import { Colors } from "./Colors";
import { connect } from "react-redux";

const NewOptionModal = (props) => {

    const [optionText, setOptionText] = useState('');

    const data = {
        "newOption": optionText,
        "id": props.newOptionId,
        "showOptionModal": props.showOptionModal
    }

    return (
        <View>
            <Modal visible={props.newOptionModalValue} animationType="none" transparent={true}>
                <View style={styles.externalView}>
                    <View style={styles.internalView}>
                        <Text style={styles.headerText}> Add New Option </Text>

                        <TextInput
                            style={styles.inputBox}
                            value={optionText}
                            onChangeText={(text) => setOptionText(text)}
                        />
                        <View style={styles.thirdView}>

                            <TouchableOpacity onPress={() => props.showOptionModal(false)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                            {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :

                                <TouchableOpacity
                                    onPress={() => {
                                        props.requestAddNewOption(data)
                                    }}
                                >
                                    <Text style={styles.textStyle}>Add option</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    externalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    internalView: {
        borderRadius: 15,
        paddingRight: 5,
        borderWidth: 1,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
        minWidth: 350,
        borderColor: Colors.lightgray,
        backgroundColor: Colors.white,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },

    inputBox: {
        borderWidth: 1,
        borderColor: Colors.lightgray,
        borderRadius: 10,
        height: 150,
        minWidth: 350,
        padding: 10,
    },
    priorityInputBox: {
        borderWidth: 1,
        borderColor: Colors.lightgray,
        borderRadius: 10,
        height: 50,
        minWidth: 350,
        padding: 10,
    },
    thirdView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    textStyle: {
        color: Colors.blue,
        fontSize: 20,
    },
});


const mapStateToProps = (state) => {

    return {
        isLoading: state.newOption.isLoading,
    };
};


export default connect(mapStateToProps, null)(NewOptionModal);
