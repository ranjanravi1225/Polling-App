import React, { useEffect } from "react";
import {
    FlatList,
    StyleSheet,
    SafeAreaView,
    ActivityIndicator,
    Dimensions,
} from "react-native";
import { Colors } from "./Colors";
import { connect } from "react-redux";
import { getAllPolls } from '../Redux/Action/action';
import PollData from './PollData';



const AllPolls = (props) => {

    useEffect(() => {
        props.allPolls();
    }, []);

    return (
        <SafeAreaView style={styles.firstView}>
            {props.isLoading ? <ActivityIndicator size={50} color={Colors.skyBlue} /> :
                <FlatList
                    style={{ height: Dimensions.get('window').height - 70, }}
                    data={props.pollData}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item, index }) => (
                        <PollData item={item} index={index + 1} />
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
});


const mapStateToProps = (state) => {
    console.log(state, 'sssssssssss');
    console.log(state.allPolls.pollData, 'wwwwwwwwwww');

    return {
        isLoading: state.allPolls.isLoading,
        pollData: state.allPolls.pollData
    };
};

const mapdispatchToProps = (Dispatch) => {
    return {
        allPolls: () => Dispatch(getAllPolls())
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(AllPolls);
