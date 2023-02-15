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

export default function Item({item, overview = false}: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const saved = useSelector((state: RootState) => state.saved);

  const isIn = saved.find(el => el?.id === item.id);
  const uri = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;

  const handlePress = () => {
    dispatch(savedActions.toggleSaved(item));
  };

  const handleNavigate = () => {
    // @ts-ignore
    navigation.navigate('Details', {id: item.id});
  };

  return (
    <TouchableOpacity style={styles.item} onPress={handleNavigate}>
      <View style={styles.heading}>
        <Text style={styles.title}>{item.name || item.title}</Text>
        <Button title={isIn ? 'Saved' : 'Watch later'} onPress={handlePress} />
      </View>
      <Image source={{uri}} style={styles.image} />
      {overview && <Text style={styles.overview}>{item.overview}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  title: {
    fontWeight: '500',
  },
  image: {height: 200},
  overview: {
    marginTop: 16,
  },
});
