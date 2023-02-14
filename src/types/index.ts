import {FC} from 'react';

type Routes = 'Movies' | 'Saved';

export interface TRoute {
  component: FC;
  name: Routes;
  bagde?: boolean;
}

export interface TMovie {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
