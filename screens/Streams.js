import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';



const Item = ({ name, description, thumbnail }) => (
  <TouchableOpacity style={styles.item}>
    <Image source={{ uri: thumbnail }} style={styles.thumbnail}  />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
  
);


const Streams = () => {

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
    <Item name={item.name} description={item.description} thumbnail={item.thumbnail} />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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
