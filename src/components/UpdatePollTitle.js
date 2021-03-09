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

const UpdatePollTitle = (props) => {

    const [titleText, setTitleText] = useState(props.editTitle);

    const data = {
        "newTitle": titleText,
        "id": props.id,
        "showModal": props.showModal
    }

    return (
        <View>
            <Modal visible={props.modalValue} animationType="none" transparent={true}>
                <View style={styles.externalView}>
                    <View style={styles.internalView}>
                        <Text style={styles.headerText}> Update Poll Title </Text>

                        <TextInput
                            style={styles.inputBox}
                            value={titleText}
                            onChangeText={(text) => setTitleText(text)}
                        />
                        <View style={styles.thirdView}>
                            <TouchableOpacity onPress={() => props.showModal(false)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableOpacity>

                            {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :

                                <TouchableOpacity
                                    onPress={() => {
                                        props.requestEditTitle(data)
                                    }}
                                >
                                    <Text style={styles.textStyle}>Update</Text>
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
        shadowColor: Colors.black,
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
        isLoading: state.editPollTitle.isLoading,
    };
};


export default connect(mapStateToProps, null)(UpdatePollTitle);
