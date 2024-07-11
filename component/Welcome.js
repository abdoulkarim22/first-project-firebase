import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Get Started!</Text>
      <Image
        source={require('../assets/2_150-removebg-preview.png')} // Replace with your image path
        style={styles.image}
      />
      <TouchableOpacity 
        style={styles.signUpButton} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>Log In</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', // Adjust based on your design
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Adjust based on your design
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  signUpButton: {
    backgroundColor: 'green', // Adjust based on your design
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginBottom: 20,
    width:302,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign:"center",
    fontWeight:'bold',
  },
  loginText: {
    color: 'white',
    fontWeight:"condensed",

  },
  loginLink: {
    color: '#f5bf42',
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;
