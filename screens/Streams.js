import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { LogBox } from 'react-native';
import Header from '../components/header';



export var videoId = -1;




const Streams = ({navigation}) => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

    const Item = ({ name, description, thumbnail, id }) => (
        <TouchableOpacity style={styles.item} onPress={() => {
          videoId = id;
          navigation.navigate("videoView")}}>
          <Image source={{ uri: thumbnail }} style={styles.thumbnail}  />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </TouchableOpacity>
        
      );

    const[DATA, setStreams] = useState([]);

    const getStreamsFromAPI = () => {
        return fetch('https://sunrise-backend-kfxr.onrender.com/getStreams')
          .then(response => response.json())
          .then(json => {
            setStreams(json);
            return;
          })
          .catch(error => {
            console.error(error);
          });
      };

      useEffect(() =>{
      getStreamsFromAPI();}, []);
      




  const renderItem = ({ item }) => (
    <Item name={item.name} description={item.description} thumbnail={item.thumbnail} id={item.id} />
  );

  return (
    <View style={styles.container2}>
    <View >
        <Header/>
    </View>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container2:{
    flex: 1,
    backgroundColor: '#041522',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 16,
    top: 50
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Streams;
