import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const name : string = "Harsh";
const age : number = 25;
const Company: string="JJ Group";
const email: string="ajha25770@gmail.com";

const UserData = () =>{
  return(
    <View style={[styles.card,{backgroundColor:'lightblue'}]}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.info}>{age} years old</Text>
      <Text style={styles.info}>{Company}</Text>
      <Text style={styles.subInfo}>{email}</Text>
    </View>
  )
}


const CompanyData = () =>{
  return (
    <View style={[styles.card,{backgroundColor:'lightgreen'}]}>
      <Text style={styles.title}>{Company}</Text>
      <Text style={styles.info}>{email}</Text>
    </View>
  )
}

export default function App() {
  const [show,setShow] = useState<'user' | 'company'>('user');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Harsh's First React Native App 🚀</Text>
      {/* <View style={{width:'80%',gap:10,flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
        <Button title="Show User Data" onPress={() => setShow('user')} />
        <Button title="Show Company Data" onPress={() => setShow('company')} />
      </View> 
      {show === 'user' && <UserData />}
      {show === 'company' && <CompanyData />}
      */}
      {show === 'user' ?(
        <>
          <Button title="Show Company Data" onPress={() => setShow('company')} />
            <UserData />
        </>

      ):(
        <>
          <Button title="Show User Data" onPress={() => setShow('user')} />
            <CompanyData />
        </>
      )}
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card:{
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    width:'80%',
    alignItems:'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info:{
    fontSize: 18,
    marginBottom: 5,
  },
  subInfo:{
    fontSize: 15,
  }

});
