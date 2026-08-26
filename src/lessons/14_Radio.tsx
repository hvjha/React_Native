import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Radio = () => {
    const skills = [
        { id: 1, name: 'JAVA' },
        { id: 2, name: 'PYTHON' },
        { id: 3, name: 'C++' },
        { id: 4, name: 'SQL' },
        { id: 5, name: 'JAVASCRIPT' },
        { id: 6, name: 'C' },
        { id: 7, name: 'REACT NATIVE' },
        { id: 8, name: 'REACT' },
        { id: 9, name: 'PHP' },
        { id: 10, name: 'POWER BI' },
    ]
    const [selectedRadio, setSelectedRadio] = useState(1)
    return (
        <View style={styles.main}>
            {
                skills.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
                        <View style={styles.radioWrapper}>
                            <View style={styles.radio}>
                                {
                                    selectedRadio === item.id ? <View style={styles.radiobg}></View> : null
                                }
                            </View>
                            <Text style={styles.radiotext}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
            {/* <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            selectedRadio ===1? <View style={styles.radiobg}></View>:null
                        }
                    </View>
                    <Text style={styles.radiotext}>Radio 1</Text>
                </View>
            </TouchableOpacity> */}
            {/* <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {
                            selectedRadio ===2? <View style={styles.radiobg}></View>:null
                        }
                    </View>
                    <Text style={styles.radiotext}>Radio 2</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radiotext: {
        fontSize: 20,
        color: 'skyblue',
    },
    radio: {
        height: 40,
        width: 40,
        borderColor: 'lightpink',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width:300,
    },
    radiobg: {
        backgroundColor: 'lightpink',
        height: 30,
        width: 30,
        borderRadius: 20,
        margin: 3
    }
})
export default Radio;