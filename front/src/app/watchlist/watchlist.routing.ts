import { Routes, RouterModule } from '@angular/router';

import { WatchListCompareComponent } from './components/watchlist-compare/watchlist-compare.component';

export const marketRoutes: Routes = [
  {
    path: 'compare',
    component: WatchListCompareComponent,
    data: {
      breadcrumbs: 'WatchList'
    }
  },
];
