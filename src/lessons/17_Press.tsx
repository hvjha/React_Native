import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const Press = () => {
    return (
        <View style={styles.main}>
            <Pressable 
            onPress={()=>console.warn("normal on press")} 
            onLongPress={()=>console.warn("Long Press")}
            onPressIn={()=>console.warn("press in")}
            onPressOut={()=>console.warn("pressout")}>
                <Text style={styles.PressableBtn}>Pressable</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center'
    },
    PressableBtn: {
        backgroundColor: 'blue',
        color: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default Press;