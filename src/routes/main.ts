import {TRoute} from '../types';
import Movies from '../pages/Movies';
import Saved from '../pages/Saved';
import Details from '../pages/Details';

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
  {
    component: Details,
    name: 'Details',
    bagde: false,
  },
];
