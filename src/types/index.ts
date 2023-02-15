import {FC} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

export interface TRoute {
  component: FC;
  name: string;
  title?: string;
  icon?: IconProp;
  bagde?: boolean;
}

export interface TMovie {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
