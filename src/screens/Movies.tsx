import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useGetAllMoviesQuery} from '../redux/api';
import {TMovie} from '../types';
import List from '../components/List';

type Query = {data: {results: TMovie[]}; isLoading: boolean};

export default function Movies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<TMovie[]>([]);

  const {data, isLoading} = useGetAllMoviesQuery<Query>(page);

  const handleLoadMore = () => {
    setPage(page + 1);
    setMovies(movies.concat(data.results));
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.text}>Loading</Text>
      ) : (
        <List items={movies} handleLoadMore={handleLoadMore} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  text: {
    paddingVertical: 16,
  },
});
