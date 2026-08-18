import React from 'react';
import { Text, View, StyleSheet, FlatList as RNFlatList} from 'react-native';


const FlatList = () =>{
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
        }
    ]

    return(
        <View>
            <Text style={styles.textHeader}>List with Flat List Component</Text>
            <RNFlatList
                data={users}
                renderItem={({ item }) => (
                    <View style={[styles.card]}>
                    <Text style={styles.text}>Name:{item.name}</Text>
                    <Text style={styles.text}>ID:{item.id}</Text>
                    <Text style={styles.email}>Email:{item.email}</Text>
                    </View>
                )}
            />
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
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        gap: 10,
        margin:10
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
})
export default FlatList;