import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
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
  loginText:{
    position: 'absolute',
    width: 64,
    height: 22,
    left: 148,
    top: 84
    textAlign: 'center'
  }
});