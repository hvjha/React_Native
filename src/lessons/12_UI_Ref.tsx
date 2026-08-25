import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

const Response = () =>{
    return(
        <View style={{flex:1}}>
            <Text style={styles.textHeader}>UI Responsiveness</Text>
            <View style={styles.container}>
                <View style={styles.innerContainer}></View>
                <View style={styles.innerContainer1}></View>
                <View style={styles.innerContainer2}></View>
                <View style={styles.innerContainer3}></View>
            </View>
            <View style={styles.container1}></View>
            <View style={styles.container2}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'cyan',
        padding:10,
        borderRadius:5
    },
    container:{
        backgroundColor:'green',
        flex:1,
        flexDirection:'row'
    },
    container1:{
        backgroundColor:'red',
        flex:1
    },
    container2:{
        backgroundColor:'blue',
        flex:1
    },
    innerContainer:{
        flex:1,
        backgroundColor:"lightpink",
        margin:5
    },
    innerContainer1:{
        flex:1,
        backgroundColor:"white",
        margin:5
    },
    innerContainer2:{
        flex:1,
        backgroundColor:"cyan",
        margin:5
    },
    innerContainer3:{
        flex:1,
        backgroundColor:"lightblue",
        margin:5
    },
    
})

export default Response;