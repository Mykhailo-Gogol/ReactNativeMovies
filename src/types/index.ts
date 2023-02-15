import {FC} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

export type TRootStackParamList = {
  Main: undefined;
  Movies: undefined;
  Saved: undefined;
  Details: undefined;
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
}
