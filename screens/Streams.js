import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Item 1',
    description: 'Description of item 1',
    thumbnail: 'https://source.unsplash.com/random/200x200',
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'Description of item 2',
    thumbnail: 'https://source.unsplash.com/random/200x200',
  },
  {
    id: '3',
    title: 'Item 3',
    description: 'Description of item 3',
    thumbnail: 'https://source.unsplash.com/random/200x200',
  },
];

const Item = ({ title, description, thumbnail }) => (
  <TouchableOpacity style={styles.item}>
    <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </TouchableOpacity>
  
);

const Streams = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} thumbnail={item.thumbnail} />
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
