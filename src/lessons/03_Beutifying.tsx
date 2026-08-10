import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Beautifying = () => {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Beautifying React Native</Text>
        
        <View style={styles.card}>
          <Text style={[styles.text, styles.blueText]}>
            This is a sample text with blue color.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={[styles.text, styles.greenText]}>
            This is a sample text with green color.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f6fa', 
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f3640',         
    marginBottom: 30,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  blueText: {
    color: '#0097e6',        
    fontWeight: '600',
  },
  greenText: {
    color: '#44bd32',         
    fontWeight: '600',
  },
});

export default Beautifying;
