import React from 'react';

import { Text, View, StyleSheet, ScrollView} from 'react-native';

const CustomList = () =>{
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
    ]

    return(
        <View style={styles.container}>
            <Text style={styles.textHeader}>Custom List Component with MAP</Text>
             <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={true}
        >
            {
                users.map((item)=>(
                    <View key={item.id} style={[styles.card]}>
                    <Text style={styles.text}>Name:{item.name}</Text>
                    <Text style={styles.text}>ID:{item.id}</Text>
                    <Text style={styles.email}>Email:{item.email}</Text>
                    </View>
                ))
            }
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
    },
    email: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        color: 'gray',
        fontWeight:"thin"
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        alignSelf: 'center',
    },
    scrollContent: {
        paddingBottom: 50
    },
    container: {
        flex:1,
        backgroundColor:'lightgray'
    },

})

export default CustomList;