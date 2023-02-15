import {TRoute} from '../types';
import Movies from '../pages/Movies';
import Saved from '../pages/Saved';
import Details from '../pages/Details';

export const MainRoutes: TRoute[] = [
  {
    component: Movies,
    name: 'Movies',
    icon: 'home',
  },
  {
    component: Saved,
    name: 'Saved',
    bagde: true,
    icon: 'bookmark',
  },
];

export const DetailsRoutes: TRoute[] = [
  {
    component: Details,
    name: 'Details',
  },
];
