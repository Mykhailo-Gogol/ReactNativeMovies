import React, {useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Pressable,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TMovie} from '../types';
import Item from './Item';

type Props = {
  items: TMovie[];
  handleLoadMore?: Function;
};

export default function List({items, handleLoadMore}: Props) {
  const flatList = useRef<FlatList>(null);

  const footerComponent = () =>
    handleLoadMore ? (
      <ActivityIndicator size="small" style={styles.loader} />
    ) : null;

  const handleReached = () => {
    if (handleLoadMore) {
      handleLoadMore();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        style={{position: 'relative'}}
        data={items}
        ref={flatList}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item, index) => [item.id, index].join('-')}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={footerComponent}
        onEndReached={handleReached}
        onEndReachedThreshold={0}
      />
      <Pressable
        style={({pressed}) => ({
          ...styles.scrollTop,
          backgroundColor: pressed ? '#3cf' : '#ddd',
        })}
        onPressIn={() =>
          flatList.current?.scrollToIndex({index: 0, animated: true})
        }>
        <FontAwesomeIcon icon="arrow-up" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 5,
  },
  list: {
    position: 'relative',
  },
  scrollTop: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 10,
    bottom: 10,
    zIndex: 10,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    marginBottom: 16,
  },
});
