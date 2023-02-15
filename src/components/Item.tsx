import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {savedActions} from '../redux/slices/saved';
import {TMovie} from '../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {faBookmark as farBookmark} from '@fortawesome/free-regular-svg-icons';

type Props = {
  item: TMovie | undefined;
  overview?: boolean;
};

export default function Item({item, overview = false}: Props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const saved: TMovie[] = useSelector((state: RootState) => state.saved);

  const isIn = saved.find((el: TMovie) => el?.id === item?.id);
  const uri = `https://image.tmdb.org/t/p/original${item?.backdrop_path}`;

  const handlePress = () => {
    if (item) {
      dispatch(savedActions.toggleSaved(item));
    }
  };

  const handleNavigate = () => {
    navigation.navigate('Details' as never, {id: item?.id} as never);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigate}>
        <View style={styles.header}>
          <Text style={styles.title}>{item?.name || item?.title}</Text>
          {/* add icon */}
          <TouchableOpacity onPress={handlePress}>
            <FontAwesomeIcon icon={isIn ? faBookmark : farBookmark} size={24} />
          </TouchableOpacity>
        </View>
        <Image source={{uri}} style={styles.image} />
      </TouchableOpacity>

      {overview && <Text style={styles.overview}>{item?.overview}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
    paddingBottom: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255,  0.8)',
  },
  title: {
    width: '80%',
    marginRight: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  image: {
    height: 200,
  },
  overview: {
    marginTop: 16,
  },
});
