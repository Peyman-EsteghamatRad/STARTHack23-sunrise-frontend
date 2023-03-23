import { Button, StyleSheet, Text, View, TextInput } from 'react-native';






export default function LogIn() {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>

        <Text style={styles.usernameText}>Email</Text>
          <TextInput
        style={styles.userInput}
      />

        <Text style={styles.passwordText}>Password</Text>
          <TextInput
        style={styles.passwordInput}
      />
      <View style={styles.signInButton}>
      <Button
        title='Sign In'
        color='#FF8515'
        style={styles.signInButton}/>
    </View>
      </View>
    );
  

}

const styles = StyleSheet.create({
  container:{
    textAlign: 'center',
    backgroundColor: '#041522',
    height:1000
  },
  loginText:{
    textAlign:'center',
    top: 120,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 40
  },
  userInput:{
    alignSelf: 'center',
    top: 210,
    width:350,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center'
  },
  usernameText: {
    color: '#FFC700',
    top:205,
    left:37,
  },
  passwordInput:{
    alignSelf: 'center',
    top: 260,
    width:350,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center'
  },
  passwordText: {
    color: '#FFC700',
    top:255,
    left:37,
  },
  signInButton:{
    width: 175,
    alignSelf: 'center',
    borderRadius: 30,
    top: 350
  }


});