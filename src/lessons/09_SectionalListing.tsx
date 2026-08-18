import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native'

const SectionalList = () => {
    const users = [
        {
            id: 1,
            name: 'Anil',
            data: ["PHP", "React js", "Angular"]
        },
        {
            id: 2,
            name: "Harsh",
            data: ["Java", "Kotlin", "React Native"]
        },
        {
            id: 3,
            name: "Aman",
            data: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 4,
            name: "Sakshi",
            data: ["Python", "C++", "SQL"]
        },
         {
            id: 5,
            name: 'Anil',
            data: ["PHP", "React js", "Angular"]
        },
        {
            id: 6,
            name: "Harsh",
            data: ["Java", "Kotlin", "React Native"]
        },
        {
            id: 7,
            name: "Aman",
            data: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: 8,
            name: "Sakshi",
            data: ["Python", "C++", "SQL"]
        }
    ]
    return (
        <View style={{flex:1, paddingBottom:10}}>
            <Text style={styles.textheader}>Section List In React Native</Text>

            {/* <SectionList sections={users} 
            
            renderItem={({item})=>(
                <View style={styles.card}>
                    <Text>{item}</Text>
                </View>
            )}
            renderSectionHeader={({section:{name}})=>(
                <Text style={styles.card}>{name}</Text>
            )}
           
            /> */}
            <SectionList
                sections={users}

                renderSectionHeader={({ section }) => (
                    <View style={styles.card}>

                        {/* Name */}
                        <Text style={styles.name}>
                            {section.name}
                        </Text>

                        {/* Skills in one row */}
                        <View style={styles.dataRow}>
                            {section.data.map((item, index) => (
                                <Text key={index} style={styles.skill}>
                                    {item}
                                </Text>
                            ))}
                        </View>

                    </View>
                )}

                renderItem={() => null}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textheader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 35,
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        flex:1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },

    dataRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    skill: {
        fontSize: 15,
        color: 'gray',
        backgroundColor:'lightblue',
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:5,
        borderColor:'black',
        textAlignVertical:'center',
        textAlign:'center'
    }
})

export default SectionalList