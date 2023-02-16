import Movies from '../../screens/Movies';
import Saved from '../../screens/Saved';
import Details from '../../screens/Details';
import Video from '../../components/Video';
import MainNavigatior from '../MainNavigator';
import {TRoute} from '../../types';

enum TKey {
  MAIN = 'main',
  MOVIES = 'movies',
  SAVED = 'saved',
  DETAILS = 'details',
  VIDEO = 'video',
}

export const Routes: {[key in TKey]: TRoute} = {
  main: {
    component: MainNavigatior,
    name: 'Main',
    title: 'Movies',
  },
  movies: {
    component: Movies,
    name: 'Movies',
    icon: 'home',
  },
  saved: {
    component: Saved,
    name: 'Saved',
    bagde: true,
    icon: 'bookmark',
  },
  details: {
    component: Details,
    name: 'Details',
  },
  video: {
    component: Video,
    name: 'Video',
    icon: 'video',
  },
};
