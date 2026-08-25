import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, Button } from 'react-native';

const HideShow = () => {
    const [show, setShow] = useState(true);

    return (
        <View>

            <Text style={styles.text}>
                Toggle
            </Text>

            {show && <User />}

            <Button
                title={show ? 'Hide' : 'Show'}
                onPress={() => setShow(!show)}
            />

        </View>
    );
};

const User = () => {

    useEffect(() => {

        const timer = setInterval(() => {
            console.warn("Timer Called");
        }, 2000);

        return () => {
            console.warn("User Component Unmounted");
            clearInterval(timer);
        };

    }, []);

    return (
        <View>
            <Text style={styles.subtext}>
                User Component
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'lightblue',
        padding: 10,
    },

    subtext: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        margin: 10,
    },
});

export default HideShow;