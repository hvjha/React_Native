import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



export default function App() {
  let Name = "Harsh Vardhan";
  const [name, setName] = useState(Name);
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 25 }}>Props In React Native</Text>
      <Button title='Update Name' onPress={() => setName("John Doe")} />
      <User name={name} age={25} />
    </View>
  )
   
}

const User = (props: { name: string; age: number }) =>{
   return (
    <View style={{ marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Child Components</Text>
      <Text style={{ fontSize: 18 }}>Name: {props.name}</Text>
      <Text style={{ fontSize: 18 }}>Age: {props.age}</Text>
    </View>
  )
}