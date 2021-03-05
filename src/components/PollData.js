import React from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
} from "react-native";


export default function PollData(props) {
    return (
        <View style={styles.flatlistView}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}> {props.index} : {props.item.title} </Text>
            <FlatList
                data={props.item.options}
                renderItem={({ item, index }) => (
                    <Text style={{ fontSize: 15 }}> {index + 1}: {item.option} </Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatlistView: {
        marginTop: 15,
        minHeight: 70,
        minWidth: 70,
        borderBottomWidth: 1,
        paddingLeft: 10
    },
});