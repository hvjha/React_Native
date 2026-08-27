import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ModalComp = ({ onClose }: { onClose: () => void }) => {
    return (
        <View style={styles.main}>
        <View style={styles.centerview}>
            <View style={styles.modal}>
                <Text style={styles.textinner}>Hello Code Learning Asspirant</Text>
                <View style={styles.btn1}>
                    <Button title='Close' onPress={onClose} />
                </View>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
     main:{
        position:'absolute',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
     textinner:{
        fontSize:20,
        fontWeight:'medium',
        marginBottom:10
    },
     btn1:{
        margin:10,
        borderRadius:5,
        paddingBottom:0
    },
    centerview:{
        position:'relative',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        backgroundColor:'#fff',
        padding:30,
        borderRadius:20,
        shadowColor:'black',
        elevation:5,
    }
})

export default ModalComp;