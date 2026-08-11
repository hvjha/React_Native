import React, { useState } from 'react'

import { StyleSheet, Text, TextInput, View, Button } from 'react-native'


const TextInputValue = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [submitted, setSubmitted] = useState<{ name: string, password: string } | null>(null);

    const handleSubmit = () => {
        setSubmitted({
            name: name,
            password: password,
        })
        setName('');
        setPassword('');
    }
    return (
        <View>
            <Text style={styles.text}>Handling Input Value</Text>

            <View >
                <TextInput style={styles.input} placeholder="Enter text here..." value={name} onChangeText={setName} />
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Enter password here..."
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!visible}
                    />

                    <Text
                        style={styles.toggleText}
                        onPress={() => setVisible(!visible)}
                    >
                        {visible ? 'Hide' : 'Show'}
                    </Text>
                </View>
            </View>
            <View style={styles.btn}>
                <Button title='Submit' onPress={handleSubmit} />
            </View>
            {submitted && (
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Submitted Data</Text>
                    <Text style={styles.cardText}>Name: {submitted.name}</Text>
                    <Text style={styles.cardText}>Password: {submitted.password}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: 800,
        width: '80%',
        alignSelf: 'center',
    },
    btn: {
        marginTop: 10,
        padding: 10,
        width: '30%',
        alignSelf: 'center',
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#0f0303',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '50%',
        alignSelf: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: 'white',
    },
    cardText: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'center',
        color: 'white',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        width: '80%',
        alignSelf: 'center',
        margin: 10,
        paddingHorizontal: 10,
    },

    passwordInput: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: 800,
    },

    toggleText: {
        color: 'blue',
        fontWeight: 'bold',
        paddingHorizontal: 5,
    }

})
export default TextInputValue