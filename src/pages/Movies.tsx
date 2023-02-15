import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useGetAllMoviesQuery} from '../redux/api';
import {TMovie} from '../types';
import List from '../components/List';

type Query = {data: {results: TMovie[]}; isLoading: boolean};

export default function Movies() {
  const {data, isLoading} = useGetAllMoviesQuery<Query>(undefined);

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading</Text> : <List items={data.results} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
