import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const firebaseConfig = {
  apiKey: "AIzaSyCIc80VS4n2VMBeFA0fCOzwLN5Pr_VLYgk",
  authDomain: "first-projet-authentification.firebaseapp.com",
  projectId: "first-projet-authentification",
  storageBucket: "first-projet-authentification.appspot.com",
  messagingSenderId: "515761798438",
  appId: "1:515761798438:web:06d87b2e60cca9d20055e7",
  measurementId: "G-KW4BRDXCL4"
};



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
