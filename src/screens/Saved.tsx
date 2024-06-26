import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {TMovie} from '../types';
import List from '../components/List';

export default function Saved() {
  const saved: TMovie[] = useSelector((state: RootState) => state.saved);

  return (
    <View style={styles.container}>
      {saved?.length ? (
        <List items={[...saved].reverse()} />
      ) : (
        <Text style={styles.text}>Saved List Is Empty</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    paddingBottom: 16,
  },
});
