import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';







export default function LogIn() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const changeEmil = (uEmail)=>{
    setEmail(uEmail);
  }

  const changePassword = (uPassword)=>{
    setPassword(uPassword);
  }


  const handleLogIn = () =>{
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email,
        password: password
       })
  };
  fetch('https://sunrise-backend-kfxr.onrender.com/register', requestOptions)
      .then(response => {
        const status = response.status;
        const data = response.json();
        console.log(status)
        return Promise.all([status, data]);
      })
      .then(([s,d]) => {
        if(s != 200){
          setErrorMsg(d.error);
        }else{
          console.log(s,d);

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