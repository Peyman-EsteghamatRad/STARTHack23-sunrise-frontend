import { Button, StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import { LogBox } from 'react-native';


export default function Register() {
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const [succ, setSucc] = useState(false);
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
        if(status == 200){
          setSucc(true);
          setError(false);
          return;
        }
        const data = response.json();
        return Promise.all([status, data]);
      })
      .then(([s,d]) => {
        if(s === 400){
          setError(true);
          setSucc(false);
          setErrorMsg(d.error)
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <View style={styles.container}>
      <View>
        <Header/>
      </View>
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
        secureTextEntry={true}
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
    {(succ && <Text style={styles.succText}>Account created</Text>)}

      </View>

      
  );


}

const styles = StyleSheet.create({
container:{
  textAlign: 'center',
  backgroundColor: '#041522',
  height:1000,
  alignItems: 'center'
},
loginText:{
  textAlign:'center',
  top: 120,
  fontWeight: 'bold',
  color: '#ffffff',
  fontSize: 40,
  fontFamily: 'poppins-bold',
},
userInput:{
  alignSelf: 'center',
  top: 210,
  width:350,
  borderRadius: 10,
  backgroundColor: '#ffffff',
  textAlign: 'center',
  fontFamily: 'poppins-regular',
},
usernameText: {
  color: '#FFC700',
  top:205,
  right: 130,
  fontFamily: 'poppins-regular',
},
passwordInput:{
  alignSelf: 'center',
  top: 310,
  width:350,
  borderRadius: 10,
  backgroundColor: '#ffffff',
  textAlign: 'center',
  fontFamily: 'poppins-regular',
},
passwordText: {
  color: '#FFC700',
  top:305,
  right: 130,
  fontFamily: 'poppins-regular',
},
emailInput:{
  alignSelf: 'center',
  top: 260,
  width:350,
  borderRadius: 10,
  backgroundColor: '#ffffff',
  textAlign: 'center',
  fontFamily: 'poppins-regular',
},
emailText: {
  color: '#FFC700',
  top:255,
  right: 145,
  fontFamily: 'poppins-regular',
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
  top: 405,
  fontFamily: 'poppins-regular',
},
succText:{
  color: '#00f91e',
  alignSelf: 'center',
  top: 405,
  fontFamily: 'poppins-regular',
}


});