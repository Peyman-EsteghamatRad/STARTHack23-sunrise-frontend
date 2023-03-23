import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';







export default function LogIn({ navigation }) {

  var userID = null;

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [succ, setSucc] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const changeEmil = (uEmail)=>{
    setEmail(uEmail);
  }

  const changePassword = (uPassword)=>{
    setPassword(uPassword);
  }


  const handleLogIn = () =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email,
        password: password
       })
  };
  fetch('https://sunrise-backend-kfxr.onrender.com/login', requestOptions)
      .then(response => {
        const status = response.status;
        console.log(response.status);
        const data = response.json();
        return Promise.all([status, data]);
      })
      .then(([s, d]) => {
        if(s == 200){
          console.log('OK')
          setSucc(true);
          setError(false);
          userID = d.id;
          console.log(userID);
          navigation.navigate("streams")
        }else{
          setSucc(false);
          setError(true);
          setErrorMsg(d.error)
        }
      });
  }





    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>

        <Text style={styles.usernameText}>Email</Text>
          <TextInput
        style={styles.userInput}
        onChangeText = {(data) => changeEmil(data)}
      />

        <Text style={styles.passwordText}>Password</Text>
          <TextInput
        style={styles.passwordInput}
        onChangeText = {(data) => changePassword(data)}
      />
      <View style={styles.signInButton}>
      <Button
        title='Sign In'
        color='#FF8515'
        style={styles.signInButton}
        onPress = {handleLogIn}/>
    </View>


    {(error && <Text style={styles.errorText}>{errorMsg}</Text>)}
    {(succ && <Text style={styles.succText}>Loged In</Text>)}

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
  },
  errorText:{
    color: '#e60303',
    alignSelf: 'center',
    top: 405
  },
  succText:{
    color: '#00f91e',
    alignSelf: 'center',
    top: 405
  }


});