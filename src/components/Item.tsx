import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {savedActions} from '../redux/slices/saved';
import {TMovie} from '../types';

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
    <TouchableOpacity style={styles.item} onPress={handleNavigate}>
      <View style={styles.header}>
        <Text style={styles.title}>{item?.name || item?.title}</Text>
        <Button title={isIn ? 'Saved' : 'Watch later'} onPress={handlePress} />
      </View>
      <Image source={{uri}} style={styles.image} />
      {overview && <Text style={styles.overview}>{item?.overview}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    width: '70%',
    marginRight: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  image: {height: 200},
  overview: {
    marginTop: 16,
  },
});
