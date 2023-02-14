import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

import List from '../components/List';

export default function Saved() {
  const saved = useSelector((state: RootState) => state.saved);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved movies</Text>
      {saved?.length ? (
        <List items={saved} />
      ) : (
        <Text>Saved List Is Empty</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 16,
  },
});
