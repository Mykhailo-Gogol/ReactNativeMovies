import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {TMovie} from '../types';
import Item from './Item';

type Props = {
  items: TMovie[];
  handleLoadMore?: Function;
};

export default function List({items, handleLoadMore}: Props) {
  const handleReached = () => {
    if (handleLoadMore) {
      handleLoadMore();
    }
  };

  const footerComponent = () =>
    handleLoadMore ? (
      <ActivityIndicator size="small" style={styles.loader} />
    ) : null;
  return (
    <FlatList
      data={items}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={(item, index) => [item.id, index].join('-')}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={footerComponent}
      onEndReached={handleReached}
      onEndReachedThreshold={0}
    />
  );
}

const styles = StyleSheet.create({
  loader: {
    marginBottom: 16,
  },
});
