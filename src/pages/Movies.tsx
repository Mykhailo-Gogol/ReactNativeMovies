import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useGetAllMoviesQuery} from '../redux/api';
import List from '../components/List';

export default function Movies() {
  const {data, isLoading} = useGetAllMoviesQuery(undefined);

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
