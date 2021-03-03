import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export default function Home(props) {
    const pressHandler = async () => {
        await AsyncStorage.clear();
        props.navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <View>
                <Text> Home </Text>
                <Button
                    onPress={pressHandler}
                    title='Sign Out'
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
