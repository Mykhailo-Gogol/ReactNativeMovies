import Movies from '../../screens/Movies';
import Saved from '../../screens/Saved';
import Details from '../../screens/Details';
import Video from '../../components/Video';
import MainNavigatior from '../MainNavigator';
import DetailsNavigatior from '../DetailsNavigator';
import {TRoute} from '../../types';

enum TKey {
  MAIN = 'main',
  MAIN_DETAILS = 'main_details',
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
  main_details: {
    component: DetailsNavigatior,
    name: 'Main_Details',
    title: 'Movie Details',
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
    icon: 'film',
  },
  video: {
    component: Video,
    name: 'Video',
    icon: 'video',
  },
};
