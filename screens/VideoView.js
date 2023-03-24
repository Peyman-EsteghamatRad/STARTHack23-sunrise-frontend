import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Video } from 'expo-av';
import React, { useState } from 'react';
import Chatbox from '../components/Chatbox';
import Polls from '../components/Polls';
import Stats from '../components/Stats';
import { LogBox } from 'react-native';


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
  var link = ""
  if(videoId % 2 == 0){
    link = "https://kappa.lol/uMrGF"
  }
  else{
    link = "https://kappa.lol/sGmAu"
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
        source={{uri: link}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
      </View>
      <View style={styles.wrapper}>
      <View style={styles.textContainer}>
        <TouchableOpacity style={styles.panel} onPress={changeToLC}><Text style={{color:'#fff'}}>LIVE CHAT</Text></TouchableOpacity>
        <TouchableOpacity style={styles.panel} onPress={changeToPolls}><Text style={{color:'#fff'}}>🟢 POLLS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.panel} onPress={changeToTweets}><Text style={{color:'#fff'}}>TWEETS</Text></TouchableOpacity>
      </View>
      </View>

      <View style={styles.FunktionArea}>
        {isLC && <Chatbox/>}
        {isPolls && <Polls/>}
        {isStats && <Polls/>}

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
    height:500
    

  },
  chatInput:{
    alignSelf: 'center',
    borderRadius: 10,
    width: 300,
    backgroundColor: '#062B47',
    fontFamily: 'poppins-regular',
  },
  wrapper:{
    zIndex:1
  }
});