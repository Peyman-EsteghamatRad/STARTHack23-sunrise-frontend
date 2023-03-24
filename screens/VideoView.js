import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { Video } from 'expo-av';
import React, { useState } from 'react';
import Chatbox from '../components/Chatbox';
import Polls from '../components/Polls';
import { LogBox } from 'react-native';
import Header from '../components/header';
import image from '../assets/Stats.png';

export default function VideoView() {
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [isLC, setIsLC] = useState(true);
  const [isPolls, setIsPolls] = useState(false);
  const [isStats, setIsTweets] = useState(false);


  const changeToLC = () =>{
    setIsPolls(false);
    setIsTweets(false);
    setIsLC(true);
  }

  const changeToPolls = () =>{
    setIsPolls(true);
    setIsTweets(false);
    setIsLC(false);
  }

  const changeToTweets = () =>{
    setIsPolls(false);
    setIsTweets(true);
    setIsLC(false);
  }
  return (
    <View style={styles.container}>
      <View
      ><Header />
      </View>
      
      <View style={styles.videoContainer}>
      <Video
        ref={video}
        style={styles.video}
        source={{uri: "https://kappa.lol/sGmAu"}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      </View>
      <View>
        
      </View>
      <View style={styles.wrapper}>
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.panel} onPress={changeToLC}><Text style={{color:'#fff', fontFamily: 'poppins-bold',}}>LIVE CHAT</Text></TouchableOpacity>
        <TouchableOpacity style={styles.panel} onPress={changeToPolls}><Text style={{color:'#fff', fontFamily: 'poppins-bold',}}>🟢    POLLS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.panel} onPress={changeToTweets}><Text style={{color:'#fff', fontFamily: 'poppins-bold',}}>TWEETS</Text></TouchableOpacity>
      </View>
      </View>

      <View style={styles.FunktionArea}>
        {isLC && <Chatbox/>}
        {isPolls && <Polls/>}
        {isStats && <View><ImageBackground source={image} style={styles.image}></ImageBackground></View>}
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041522',
    
  },
  videoContainer: {
    backgroundColor: '#041522',
    flex: 1,
  },
  video: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'poppins-bold',
    },
  panel: {
    zIndex: 3,
    backgroundColor:'#062B47',
    height: 40,
    width: 137,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FunktionArea:{
    backgroundColor: '#041522',
    height:500,
    flex: 2.5,

  },
  chatInput:{
    alignSelf: 'center',
    borderRadius: 10,
    width: 300,
    backgroundColor: '#062B47',
    fontFamily: 'poppins-regular',
  },
  wrapper:{
    zIndex:1,
    flex: 0.19,
  },
  image: {
    flex: 1,
    width: 400,
    height: 500,
    justifyContent: 'center',
    backgroundColor: '#041522',
    alignSelf: 'center',
  },
});