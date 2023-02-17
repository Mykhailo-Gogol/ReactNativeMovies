import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {savedActions} from '../redux/slices/saved';
import {useGetMovieVideosByIdQuery} from '../redux/api';
import {TMovie} from '../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBookmark} from '@fortawesome/free-solid-svg-icons';
import {faBookmark as farBookmark} from '@fortawesome/free-regular-svg-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

type Props = {
  item: TMovie | undefined;
  overview?: boolean;
};

export default function Item({item, overview = false}: Props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const saved: TMovie[] = useSelector((state: RootState) => state.saved);

  const {data} = useGetMovieVideosByIdQuery(item?.id || 0);

  const isIn = saved.find((el: TMovie) => el?.id === item?.id);
  const uri = `https://image.tmdb.org/t/p/original${item?.backdrop_path}`;
  const getLogo = (path: string | null) =>
    `https://image.tmdb.org/t/p/w200${path}`;

  const handlePress = () => {
    if (item) {
      dispatch(savedActions.toggleSaved(item));
    }
  };

  const handleNavigate = () => {
    navigation.navigate(
      'Main_Details' as never,
      {
        screen: 'Details',
        params: {id: item?.id},
      } as never,
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigate} style={styles.tile}>
        <View style={styles.header}>
          <Text style={styles.title}>{item?.name || item?.title}</Text>
          <TouchableOpacity onPress={handlePress}>
            <FontAwesomeIcon icon={isIn ? faBookmark : farBookmark} size={24} />
          </TouchableOpacity>
        </View>
        <Image source={{uri, height: overview ? 350 : 250}} />
      </TouchableOpacity>

      {overview && (
        <View style={styles.overview}>
          {item?.budget ? (
            <View style={styles.list}>
              <Text style={styles.withMarginRight}>Budget:</Text>
              <Text>
                {Intl.NumberFormat('en-US', {
                  notation: 'compact',
                  compactDisplay: 'short',
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(item?.budget))}
              </Text>
            </View>
          ) : null}
          {item?.vote_avarage && <Text>Rate: {item?.vote_avarage}</Text>}
          <View style={styles.list}>
            <Text style={styles.withMarginRight}>Genres:</Text>
            {item?.genres.map(({id, name}) => (
              <Text style={styles.withMarginRight} key={id}>
                {name}
              </Text>
            ))}
          </View>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={[styles.list, {marginVertical: 8}]}>
            {item?.production_companies.map(
              ({id, logo_path}) =>
                logo_path && (
                  <Image
                    style={styles.companyLogo}
                    key={id}
                    source={{uri: getLogo(logo_path)}}
                  />
                ),
            )}
          </View>
          <Text style={styles.withMarginBottom}>{item?.overview}</Text>

          <YoutubePlayer
            height={200}
            play={false}
            videoId={data.results[0]?.key}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 16,
    marginBottom: 16,
  },
  tile: {
    borderRadius: 16,
    overflow: 'hidden',
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
    backgroundColor: 'rgba(255, 255, 255,  0.6)',
  },
  title: {
    width: '80%',
    marginRight: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  companyLogo: {
    width: 60,
    height: 60,
    marginRight: 8,
    resizeMode: 'contain',
  },
  overview: {
    marginTop: 16,
  },
  withMarginRight: {
    marginRight: 4,
  },
  withMarginBottom: {
    marginBottom: 16,
  },
  boldText: {
    fontWeight: '700',
  },
});
