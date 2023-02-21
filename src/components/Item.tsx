import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
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
    <View className={nativeWind.container}>
      <TouchableOpacity onPress={handleNavigate} className={nativeWind.tile}>
        <View
          className={nativeWind.header}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{backgroundColor: 'rgba(255,255,255,0.7)'}}>
          <Text className={nativeWind.title}>
            {`${item?.name || item?.title} (${new Date(
              item!.release_date,
            ).getFullYear()})`}
          </Text>
          <TouchableOpacity onPress={handlePress}>
            <FontAwesomeIcon icon={isIn ? faBookmark : farBookmark} size={24} />
          </TouchableOpacity>
        </View>
        <Image source={{uri, height: overview ? 350 : 250}} />
      </TouchableOpacity>

      {overview && (
        <View className={nativeWind.overview}>
          {item?.budget ? (
            <View className={nativeWind.list}>
              <Text className="mr-1">Budget:</Text>
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
          <View className={nativeWind.list}>
            <Text className="mr-1">Genres:</Text>
            {item?.genres.map(({id, name}) => (
              <Text className="mr-1" key={id}>
                {name}
              </Text>
            ))}
          </View>
          <View className={(nativeWind.list, 'my-2')}>
            {item?.production_companies.map(
              ({id, logo_path}) =>
                logo_path && (
                  <Image
                    resizeMode="contain"
                    className={nativeWind.companyLogo}
                    key={id}
                    source={{uri: getLogo(logo_path)}}
                  />
                ),
            )}
          </View>
          <Text className="mb-4">{item?.overview}</Text>

          <YoutubePlayer
            height={220}
            play={false}
            videoId={data.results[0]?.key}
          />
        </View>
      )}
    </View>
  );
}

const nativeWind = {
  container: 'relative pb-4 mb-4',
  tile: 'overflow-hidden rounded-2xl',
  header:
    'absolute bottom-0 left-0 w-full z-10 flex-row justify-between items-center py-4 px-2',
  title: 'w-[80%] mr-4 text-base font-medium',
  list: 'flex-row items-center flex-wrap',
  companyLogo: 'w-14 h-14 mr-2',
  overview: 'mt-4',
};
