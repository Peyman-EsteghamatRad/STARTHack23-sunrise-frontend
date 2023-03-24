import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text,FlatList, Button } from 'react-native';
import { Video } from 'expo-av';
import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import RNPoll, { IChoice } from "react-native-poll";
import { LogBox } from 'react-native';
export default function Polls(){
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

      const choices2 = [
        { id: 1, choice: "Zach Whitecloud", votes: 12 },
        { id: 2, choice: "Eric O'Dell", votes: 1 },
        { id: 3, choice: "Chris Driedger", votes: 3 },
        { id: 4, choice: "Artyom Zub", votes: 5 },
        { id: 5, choice: "Ivan Provorov", votes: 9 },
      ];


    return(
        <ScrollView style = {styles.scroll}>
            <Text style = {styles.quest}>Who scores the next goal?</Text>
            <RNPoll style = {{paddingTop: 20, alignSelf: 'stretch', marginLeft: 25, marginRight: 25}}
            choiceTextStyle = {{color:'#fff', fontFamily: 'poppins-bold'}}
            totalVotes={30}
            choices={choices2}
            onChoicePress={(selectedChoice) =>
                console.log("SelectedChoice: ", selectedChoice)
            }
            fillBackgroundColor={'#FFA24D'}
            percentageTextStyle={{color: 'white', fontFamily: 'poppins-regular', fontSize: 18}}
            />
        </ScrollView>

        
    )
}


const styles = StyleSheet.create({
    quest:{
        color: 'white',
        textAlign:'center',
        fontSize:20,
        fontFamily: 'poppins-bold',
        paddingTop: 40,
    },
    scroll:{
        flex: 1,
    }
  });