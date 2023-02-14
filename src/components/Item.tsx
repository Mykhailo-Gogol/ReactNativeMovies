import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {savedActions} from '../redux/slices/saved';

export default function Item({item}: any) {
  const uri = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;

  return (
    <View style={styles.item}>
      <View style={styles.heading}>
        <Text>{item.name || item.title}</Text>
        <TouchableOpacity onPress={() => savedActions.toggleSaved(item)}>
          <Text>Like</Text>
        </TouchableOpacity>
      </View>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
  },
  image: {width: '100%', height: 300},
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
});
