import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text> Home </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
