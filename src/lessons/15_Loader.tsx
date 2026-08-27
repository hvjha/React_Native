import React, { useState } from 'react';

import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native'

const Loaders = () =>{
    const [show,setShow] = useState(false)

    const displayLoader = () =>{
        setShow(true);

        setTimeout(() => {
            setShow(false)
        }, 5000);
    }
    return (
        <View style={styles.main}>
            {/* <ActivityIndicator size={200} color='black' animating={true}/>
            <ActivityIndicator size={20} color='green' animating={true}/> */}
            <ActivityIndicator size={100} color='blue' animating={show}/>
            {
                show ? <ActivityIndicator size={20} color='green' /> : null
            }
            <Button title='show loader' onPress={displayLoader}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:25
    },
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Loaders