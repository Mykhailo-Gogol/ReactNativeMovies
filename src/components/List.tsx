import React from 'react';
import {FlatList} from 'react-native';
import Item from './Item';

export default function List({items}: any) {
  return (
    <FlatList
      data={items}
      renderItem={({item}: any) => <Item item={item} />}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
