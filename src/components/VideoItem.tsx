import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function Item({item}: any) {
  const uri = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;

  return (
    <View>
      <Text>{item.name || item.title}</Text>
      <Text>{item.id}</Text>
      <Image source={{uri}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {width: '100%', height: 300},
});
