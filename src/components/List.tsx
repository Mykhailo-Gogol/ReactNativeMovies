import React, {useRef, useState} from 'react';
import {
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
      <ActivityIndicator size="small" className={nativeWind.loader} />
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

  return (
    <View className={nativeWind.container}>
      <FlatList
        className={nativeWind.list}
        data={items}
        ref={flatList}
        renderItem={({item}: {item: TMovie}) => <Item item={item} />}
        keyExtractor={(item: TMovie, index: number) =>
          [item.id, index].join('-')
        }
        showsVerticalScrollIndicator={false}
        ListFooterComponent={footerComponent}
        onEndReached={handleReached}
        onEndReachedThreshold={0}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {showScrollTop && (
        <Pressable
          className={nativeWind.backButton}
          onPress={() =>
            flatList.current?.scrollToIndex({index: 0, animated: true})
          }>
          <FontAwesomeIcon icon="arrow-up" color="white" />
        </Pressable>
      )}
    </View>
  );
}

const nativeWind = {
  container: 'relative',
  list: 'relative',
  loader: 'mb-4',
  backButton:
    'absolute w-12 h-12 items-center justify-center rounded-full bottom-2 right-2 bg-blue-400 active:bg-red-400',
};
