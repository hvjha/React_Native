import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, Modal} from 'react-native'
import ModalComp from '../Modalcom'
const ModalTest = () =>{
    const [show,setShow] = useState(false)
    return(
        <View style={styles.main}>
            {/* <Modal transparent={true} visible={show} animationType='slide'>
                <View style={styles.centerview}>
                    <View style={styles.modal}>
                        <Text style={styles.textinner}>Hello Code Learning Asspirant</Text>
                        <View style={styles.btn1}>
                            <Button title='Close' onPress={()=>setShow(false)}/>
                        </View>
                    </View>
                </View>
            </Modal> */}
            {
                show && (
                    <ModalComp onClose={()=>setShow(false)}/>
                )
            }
            <Text style={styles.text}>Modal</Text>
            <View style={styles.btn}>
                <Button title='open' onPress={()=>setShow(true)}/>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        backgroundColor:'skyblue',
        width:'100%',
        textAlign:'center',
        marginTop:0,
    },
    // textinner:{
    //     fontSize:20,
    //     fontWeight:'medium',
    //     marginBottom:10
    // },
    btn:{
        width:'100%',
        flex:1,
        justifyContent:'flex-end'
    },
    // btn1:{
    //     margin:10,
    //     borderRadius:5,
    //     paddingBottom:0
    // },
    // centerview:{
    //     flex:1,
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    // modal:{
    //     backgroundColor:'#fff',
    //     padding:30,
    //     borderRadius:20,
    //     shadowColor:'black',
    //     elevation:5,
    // }
})

export default ModalTest