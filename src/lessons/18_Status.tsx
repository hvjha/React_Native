import React from 'react'

import {View, Text, StyleSheet, Platform} from 'react-native'

const Status = () =>{
    return(
        <View style={styles.main}>
            <Text style={styles.text}>Platform : {Platform.OS}</Text>
            {
                Platform.OS ==="android" ? <View style={styles.Box2}></View>:<View style={styles.Box1}></View>
            }
            <Text style={styles.textHeader}>Harsh</Text>
            <Text style={styles.text}>{JSON.stringify(Platform.constants.reactNativeVersion)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:30,
        textAlign:'center'
    },
    Box1:{
        backgroundColor:'red',
        height:200,
        width:200
    },
    Box2:{
        backgroundColor:'green',
        height:200,
        width:200
    },
    textHeader:{
        color:Platform.OS==='android'?"red":'blue',
        fontSize:35,
        fontWeight:'bold'
    }
})

export default Status