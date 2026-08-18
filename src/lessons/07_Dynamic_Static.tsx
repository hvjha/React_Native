import React from 'react';

import {Text, View, StyleSheet, ScrollView } from 'react-native';

const DynamicStatic = () => {
     const users = [
        {
            id:1,
            name:'Harsh',
            email:"harsh@gmail.com"
        },
        {
            id:2,
            name:'Muskan',
            email:"muskan@gmail.com"
        },
        {
            id:3,
            name:'Aditya',
            email:'adi@gmail.com'
        },
        {
            id:4,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:5,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:6,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:7,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:8,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:9,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:10,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:11,
            name:'Harsh',
            email:"harsh@gmail.com"
        },
        {
            id:12,
            name:'Muskan',
            email:"muskan@gmail.com"
        },
        {
            id:13,
            name:'Aditya',
            email:'adi@gmail.com'
        },
        {
            id:14,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:15,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:16,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:17,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:18,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:19,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
         {
            id:20,
            name:'Sagar',
            email:'sagar@gmail.com'
        },
    ]

    return(
        <View>
            <Text style={styles.textHeader}>
                Dynamic and Static Components in React Native
            </Text>
            {/* <Text style={styles.textHeader}>
                Static Content
            </Text>
            <View style={styles.container}>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
                <Text style={styles.item}>Test</Text>
            </View> */}

            <Text style={styles.textHeader}>
                Static Dynamic Content
            </Text>
             <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={true}
                    >
                <View style={styles.container}>
                {
                    users.map((user) => (
                       <View key={user.id} style={styles.item}>
                        <Text style={styles.text}>{user.name}</Text>
                        <Text style={styles.id}>{user.id}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                       </View>
                       
                    ))
                }
            </View>
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 35,  
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        padding:20,
        flexWrap:'wrap',
        width:'100%',
        height:'100%',
        paddingBottom:50
    },
    item:{
        backgroundColor:'lightblue',
        padding:10,
        borderRadius:5,
        margin:5,
        fontSize:16,
        color:'black',
        fontWeight:'bold',
        textAlignVertical:'center',
        textAlign:'center',
        width:170,
        height:100,
        lineHeight:60
    },
     text: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        fontWeight:'bold'
    },
    id: {
        fontSize: 14,
        textAlign: 'center',
        color: 'gray',
        fontWeight:"bold"
    },
    email: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        color: 'black',
        fontWeight:500
    },
    scrollContent: {
        paddingBottom: 120
    },
})

export default DynamicStatic;