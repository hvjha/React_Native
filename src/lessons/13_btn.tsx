import React from 'react';

import {View, Text, StyleSheet, TouchableHighlight, Button} from 'react-native'

const BTN = () =>{
    return(
        <View style={styles.main}>
             <TouchableHighlight>
                <Text style={[styles.button,styles.success]}>Success</Text>
            </TouchableHighlight>
             <TouchableHighlight>
                <Text style={[styles.button,styles.primary]}>Primary</Text>
            </TouchableHighlight>
             <TouchableHighlight>
                <Text style={[styles.button,styles.warning]}>Warning</Text>
            </TouchableHighlight>
             <TouchableHighlight>
                <Text style={[styles.button,styles.error]}>Error</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={styles.button}>Button</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:'#bbb',
        color:'white',
        padding:10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        margin:5,
        borderRadius:5,
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    success:{
        backgroundColor:'green'
    },
    primary:{
        backgroundColor:'blue'
    },
    warning:{
        backgroundColor:'gold'
    },
    error:{
        backgroundColor:'red'
    }
})
export default BTN;