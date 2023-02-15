import React from 'react';
import {FlatList} from 'react-native';
import {TMovie} from '../types';
import Item from './Item';

type Props = {
  items: TMovie[] | never[];
};

export default function List({items}: Props) {
  return (
    <FlatList
      data={items}
      renderItem={({item}: any) => <Item item={item} />}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
