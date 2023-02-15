import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Pressable,
  NativeScrollEvent,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TMovie} from '../types';
import Item from './Item';

type Props = {
  items: TMovie[];
  handleLoadMore?: Function;
};

export default function List({items, handleLoadMore}: Props) {
  const [showScrollTop, setShowScrollTop] = useState(false);
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

  const handleScroll = ({nativeEvent}: {nativeEvent: NativeScrollEvent}) => {
    if (nativeEvent.contentOffset.y > 1000) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollTopButtonStyle = ({pressed}: {pressed: boolean}) => ({
    ...styles.scrollTop,
    backgroundColor: pressed ? '#3cf' : '#ddd',
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={items}
        ref={flatList}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item, index) => [item.id, index].join('-')}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={footerComponent}
        onEndReached={handleReached}
        onEndReachedThreshold={0}
        onScroll={handleScroll}
        scrollEventThrottle={25}
      />
      {showScrollTop && (
        <Pressable
          style={scrollTopButtonStyle}
          onPressIn={() =>
            flatList.current?.scrollToIndex({index: 0, animated: true})
          }>
          <FontAwesomeIcon icon="arrow-up" />
        </Pressable>
      )}
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
