import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {useGetMovieByIdQuery} from '../redux/api';
import Item from '../components/Item';

export default function Details({route: {params}}: any) {
  const {data, isLoading} = useGetMovieByIdQuery(params.id);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <Text style={styles.text}>Loading</Text>
      ) : (
        <Item item={data} overview={true} />
      )}
    </ScrollView>
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
