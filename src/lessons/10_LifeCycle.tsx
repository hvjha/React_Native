import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LifeCycle = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.warn('count changed', count);
    }, [count]);

    return (
        <View style={style.container}>

            <Text style={style.textHeader}>
                Life Cycle Method
            </Text>

            <View style={style.card}>

                <Text style={style.label}>
                    Current Count
                </Text>

                <Text style={style.text}>
                    {count}
                </Text>

                <View style={style.btn}>
                    <Button
                        title="Update Count"
                        onPress={() => setCount(count + 1)}
                    />
                </View>

            </View>

        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f4f7',
        padding: 20,
    },

    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#0d3d19',
        paddingVertical: 18,
        borderRadius: 12,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 25,
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 25,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },

    label: {
        fontSize: 18,
        fontWeight: '600',
        color: '#555',
        marginBottom: 15,
    },

    text: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#2563eb',
        backgroundColor: '#eff6ff',
        borderRadius: 12,
        width: 100,
        height: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 25,
    },

    btn: {
        width: '70%',
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default LifeCycle;