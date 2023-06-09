import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import Header from '../components/header';
import { LogBox } from 'react-native';


export var uid = 0;




export default function LogIn({ navigation }) {      

  
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

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
        const data = response.json();
        return Promise.all([status, data]);
      })
      .then(([s, d]) => {
        if(s == 200){
          setSucc(true);
          setError(false);
          uid = d.id;
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
        
        <Header/>
        
        <Text style={styles.loginText}>LOGIN</Text>

        <Text style={styles.usernameText}>Email</Text>
          <TextInput
        style={styles.userInput}
        onChangeText = {(data) => changeEmil(data)}
      />

        <Text style={styles.passwordText}>Password</Text>
          <TextInput
          secureTextEntry={true}
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
    {(succ && <Text style={styles.succText}>Already logged in</Text>)}

      </View>
    );
  

}

const styles = StyleSheet.create({
  container:{
    textAlign: 'center',
    backgroundColor: '#041522',
    height:1000,
    alignItems: 'center',
  },
  loginText:{
    textAlign:'center',
    top: 80,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'poppins-bold',
  },
  userInput:{
    alignSelf: 'center',
    top: 150,
    width:350,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontFamily: 'poppins-regular',
  },
  usernameText: {
    color: '#FFC700',
    top:145,
    right: 145,
    fontFamily: 'poppins-regular',
  },
  passwordInput:{
    alignSelf: 'center',
    top: 220,
    width:350,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontFamily: 'poppins-regular',
  },
  passwordText: {
    color: '#FFC700',
    top:215,
    right: 130,
    fontFamily: 'poppins-regular',
  },
  signInButton:{
    width: 175,
    alignSelf: 'center',
    borderRadius: 30,
    top: 350,
    fontFamily: 'poppins-regular',
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