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

    const choices = [
        { id: 1, choice: "Russia", votes: 12 },
        { id: 5, choice: "Canada", votes: 9 },
      ];

      const choices2 = [
        { id: 1, choice: "Zach Whitecloud", votes: 12 },
        { id: 2, choice: "Eric O'Dell", votes: 1 },
        { id: 3, choice: "Chris Driedger", votes: 3 },
        { id: 4, choice: "Artyom Zub", votes: 5 },
        { id: 5, choice: "Ivan Provorov", votes: 9 },
      ];

      const choices3 = [
        { id: 1, choice: "0", votes: 1 },
        { id: 2, choice: "1", votes: 4 },
        { id: 3, choice: "2", votes: 3 },
        { id: 4, choice: "3", votes: 6 },
        { id: 5, choice: "4", votes: 7 },
        { id: 5, choice: "5", votes: 9 },
        { id: 5, choice: "more than 5", votes: 15 },
      ];
    return(
        <ScrollView>
        <Text style = {styles.quest}>Who will win the game?</Text>
        <RNPoll
        choiceTextStyle = {{color:'#fff'}}
        totalVotes={30}
        choices={choices}
        onChoicePress={(selectedChoice) =>
            console.log("SelectedChoice: ", selectedChoice)
        }
        />
                

                <Text style = {styles.quest}>Who scores the next goal?</Text>
        <RNPoll
        choiceTextStyle = {{color:'#fff'}}
        totalVotes={30}
        choices={choices2}
        onChoicePress={(selectedChoice) =>
            console.log("SelectedChoice: ", selectedChoice)
        }
        />
                

                <Text style = {styles.quest}>How many goals will be scored in total?</Text>
        <RNPoll
            choiceTextStyle = {{color:'#fff'}}
            totalVotes={30}
            choices={choices3}
            onChoicePress={(selectedChoice) =>
                console.log("SelectedChoice: ", selectedChoice)
            }
        />

        </ScrollView>

        
    )
}

const styles = StyleSheet.create({
    quest:{
        color: '#FFC700',
        textAlign:'center',
        fontSize:20,
        fontFamily: 'poppins-regular'
    }
  });