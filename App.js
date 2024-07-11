import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './component/Welcome';
import SignUpScreen from './component/SignupScreen';
import LoginScreen from './component/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';


// const firebaseConfig = {
//   apiKey: "AIzaSyCIc80VS4n2VMBeFA0fCOzwLN5Pr_VLYgk",
//   authDomain: "first-projet-authentification.firebaseapp.com",
//   projectId: "first-projet-authentification",
//   storageBucket: "first-projet-authentification.appspot.com",
//   messagingSenderId: "515761798438",
//   appId: "1:515761798438:web:06d87b2e60cca9d20055e7",
//   measurementId: "G-KW4BRDXCL4"
// };

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Log In' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
