import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {useGetMovieByIdQuery} from '../redux/api';
import Item from '../components/Item';

export default function Details({route: {params}}: any) {
  const {data, isLoading} = useGetMovieByIdQuery(params.id);

  return (
    <ScrollView style={styles.item}>
      {isLoading ? (
        <Text style={styles.text}>Loading</Text>
      ) : (
        <Item item={data} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
  },
  text: {
    marginVertical: 16,
  },
});
