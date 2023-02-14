import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useGetAllMoviesQuery} from '../redux/api';
import List from '../components/List';

export default function Movies() {
  const {data, isLoading} = useGetAllMoviesQuery(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending movies</Text>
      {isLoading ? <Text>Loading</Text> : <List items={data.results} />}
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
