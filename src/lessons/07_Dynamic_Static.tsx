import React from 'react';

import {Text, View, StyleSheet } from 'react-native';

const DynamicStatic = () => {
    return(
        <View>
            <Text style={styles.textHeader}>
                Dynamic and Static Components in React Native
            </Text>
            <View>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
                <Text>Test</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18,
    }
})

export default DynamicStatic;