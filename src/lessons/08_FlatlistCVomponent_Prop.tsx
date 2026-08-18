import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import UserData from '../UserData';

const FlatlistComponentProp = () => {
    const users = [
        {
            id: 1,
            name: 'Harsh',
            email: "harsh@gmail.com"
        },
        {
            id: 2,
            name: 'Muskan',
            email: "muskan@gmail.com"
        },
        {
            id: 3,
            name: 'Aditya',
            email: 'adi@gmail.com'
        },
        {
            id: 4,
            name: 'Sagar',
            email: 'sagar@gmail.com'
        },
        {
            id:5,
            name:'Santosh',
            email:'santosh@gmail.com'
        }
    ]

    return (
        <View>
            <Text style={styles.textHeader}>List Rendering through component & Use Of props</Text>
            <View style={styles.container}>
                <FlatList
                    data={users}
                    renderItem={({ item }) => 
                        <UserData item={item}/>
                    }
                />
            </View>
        </View>
    )
}

// type User = {
//     id: number;
//     name: string;
//     email: string;
// };

// type UserDataProps = {
//     item: User;
// };

// const UserData = ({ item }: UserDataProps) => {
//     return (
//         <View key={item.id} style={styles.card}>
//             <Text style={styles.text}>{item.name}</Text>
//             <Text style={styles.id}>{item.id}</Text>
//             <Text style={styles.email}>{item.email}</Text>
//         </View>
//     )
// };

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
    // text: {
    //     fontSize: 16,
    //     textAlign: 'center',
    //     marginTop: 10,
    //     fontWeight: 'bold'
    // },
    // id: {
    //     fontSize: 14,
    //     textAlign: 'center',
    //     color: 'gray',
    // },
    // email: {
    //     fontSize: 14,
    //     textAlign: 'center',
    //     marginTop: 5,
    //     color: 'gray',
    //     fontWeight: "thin"
    // },
    container: {
        top:60,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        gap: 10,
        margin:'auto',
        height: 800
    },
    // card: {
    //     backgroundColor: '#ffffff',
    //     padding: 15,
    //     borderRadius: 10,
    //     marginVertical: 10,
    //     width: '90%',
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 5,
    //     elevation: 3,
    //     alignSelf: 'center',
    // },
})
export default FlatlistComponentProp;