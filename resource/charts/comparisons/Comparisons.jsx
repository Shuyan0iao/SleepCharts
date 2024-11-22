import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CompSleep from './CompSleep';
import CompHeart from './CompHeart';
export default function Comparisons() {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sleep</Text>
            <CompSleep />

            <Text style={styles.title}>Heart Rate</Text>
           <CompHeart />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
    },
});