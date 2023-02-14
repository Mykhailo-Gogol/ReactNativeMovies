import {TRoute} from '../types';
import Movies from '../pages/Movies';
import Saved from '../pages/Saved';

export const Routes: TRoute[] = [
  {
    component: Movies,
    name: 'Movies',
  },
  {
    component: Saved,
    name: 'Saved',
    bagde: true,
  },
];
