
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text,FlatList, Button } from 'react-native';
import { Video } from 'expo-av';
import React, { useState, useEffect, useRef } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { uid } from '../screens/LogIn';
import { videoId } from '../screens/Streams';
import { LogBox } from 'react-native';

export default function Chatbox(){

    LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
    LogBox.ignoreAllLogs();//Ignore all log notifications

    const [people, setPeople] = useState([]);
    const [myMsg, setMyMsg] = useState("");




    const sendMyMsg = () =>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              content: myMsg,
              userid: uid,
              streamid: videoId,
             })
        }; 
        fetch('https://sunrise-backend-kfxr.onrender.com/putComment', requestOptions)
        .then(
            response => response.json()
        )
    }
    
    const getComments = () =>{
        fetch('https://sunrise-backend-kfxr.onrender.com/getLatestMsgs?id='+videoId)
        .then(
            response => response.json()
        )
        .then(
            json =>{
                setPeople(json);
                return;

            }
        );


        

    }
    useEffect(() => {
        const interval = setInterval(() => {
          getComments();
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
    return(
        <>
        <View style={styles.container}>
    
          <FlatList 
            numColumns={1}
            keyExtractor={(item) => item.id} 
            data={people} 
            renderItem={({ item }) => ( 
              <Text style={styles.item}> <Text style={{color: '#FF8515', fontFamily: 'poppins-lightitalic', fontSize: 14}}>{item.name}</Text>: {item.comment}</Text>
            )}
          />
    
        </View>

        <View style={styles.wrapper}>
      <TextInput style={styles.input} placeholder="Type something..." onChangeText={(t) => setMyMsg(t)}/>
      <TouchableOpacity style={styles.button} onPress={() => {sendMyMsg();setMyMsg("")}}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
        </>
      );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        marginHorizontal: 6,
        marginTop: 10,
        fontSize: 14,
        color: '#fff',
        fontFamily: 'poppins-lightitalic',
    },
    chatInput:{
        flex:1,
        flexDirection:'row' ,
        justifyContent:'space-between',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 30,
        bottom: 13,
        borderRadius: 10,

    },
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '8%', // 1/9th of the screen height
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingHorizontal: 20,
        flexDirection: 'row', // align children in a row
        alignItems: 'center', // center children vertically
      },
      input: {
        flex: 1, // use remaining space
        height: '60%',
        fontSize: 18,
        marginRight: 10, // add some space between the input and the button
      },
      button: {
        height: '60%',
        backgroundColor: '#2196f3',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'poppins-regular',
      },
    });

    
    