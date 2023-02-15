import {FC} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type Routes = 'Movies' | 'Saved' | 'Details';

export interface TRoute {
  component: FC;
  name: Routes;
  bagde?: boolean;
  icon?: IconProp;
}

export interface TMovie {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
