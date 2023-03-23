import { Button, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, UseState} from 'react';

export default function Register() {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  const changeUsername = (uName)=>{
    setUsername(uName);
  }

  const changeEmil = (uEmail)=>{
    setEmail(uEmail);
  }

  const changePassword = (uPassword)=>{
    setPassword(uPassword);
  }

  const handleRegister = () =>{
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email,
        name: username,
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
          console.log(s,d);
          setError(true);
          setErrorMsg(d.error);
        }else{
          console.log(s,d);

          setError(false);
        }
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Register</Text>

      <Text style={styles.usernameText}>Username</Text>
        <TextInput
      style={styles.userInput}
      onChangeText = {(data) => changeUsername(data) }
    />

      <Text style={styles.emailText}>Email</Text>
        <TextInput
      style={styles.emailInput}
      onChangeText = {(data) => changeEmil(data)}
    />

<Text style={styles.passwordText}>Password</Text>
        <TextInput
      style={styles.passwordInput}
      onChangeText = {(data) => changePassword(data)}
    />

<View style={styles.registerButton}>
      <Button
        title='Register'
        color='#FF8515'
        style={styles.registerButton}
        onPress = {handleRegister}/>
    </View>

    {(error && <Text style={styles.errorText}>{errorMsg}</Text>)}
    {(!error && <Text style={styles.succText}>Account created</Text>)}

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
  top: 310,
  width:350,
  borderRadius: 10,
  backgroundColor: '#ffffff',
  textAlign: 'center'
},
passwordText: {
  color: '#FFC700',
  top:305,
  left:37,
},
emailInput:{
  alignSelf: 'center',
  top: 260,
  width:350,
  borderRadius: 10,
  backgroundColor: '#ffffff',
  textAlign: 'center'
},
emailText: {
  color: '#FFC700',
  top:255,
  left:37,
},
registerButton:{
  width: 175,
  alignSelf: 'center',
  borderRadius: 30,
  top: 380
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