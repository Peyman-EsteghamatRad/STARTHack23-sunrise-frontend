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
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    textAlignVertical: 'top',
  }
});