import { Routes, RouterModule } from '@angular/router';

import { MarketDetailComponent } from './components/market-detail/market-detail.component';

export const marketRoutes: Routes = [
  {
    path: 'view/:id',
    component: MarketDetailComponent,
    data: {
      breadcrumbs: 'Market Detail'
    }
  },
];
