import {FC} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

export type TRootStackParamList = {
  Main: undefined;
  Movies: undefined;
  Saved: undefined;
  Details: {id: number} | undefined;
  Video: undefined;
};

export interface TRoute {
  component: FC;
  name: keyof TRootStackParamList;
  title?: string;
  icon?: IconProp;
  bagde?: boolean;
}

export interface TMovie {
  id: number;
  name?: string;
  title?: string;
  backdrop_path: string | null;
  overview: string;
  genres: {id: number; name: string}[];
  budget: string;
  vote_avarage: number;
  production_companies: {id: number; name: string; logo_path: string | null}[];
}
