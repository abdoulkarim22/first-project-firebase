import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}> 
      <Image
        source={require('../assets/2_150-removebg-preview.png')} // Replace with your image path
        style={styles.image}
      /></View>
      {/* Add your sign-up form here */}
      <View style={styles.containerWhite}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Adjust based on your design
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white', // Adjust based on your design
  },
  containerWhite: {
    backgroundColor:"red",
    height:300,
    width:'100%',
   borderTopEndRadius:50,
   borderTopStartRadius:50
  }
});

export default SignUpScreen;
