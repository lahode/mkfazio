import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MarketsModule } from './markets/markets.module';
import { CompaniesModule } from './companies/companies.module';
import { WatchListModule } from './watchlist/watchlist.module';
// import { AuthGuard } from './auth/services/authguard.service';
// import { NoGuard } from './auth/services/noguard.service';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumbs: 'Home'
    }
  },
  {
    path: 'markets',
    loadChildren: 'app/markets/markets.module#MarketsModule',
    data: {
      breadcrumbs: 'Markets'
    }
  },
  {
    path: 'watchlist',
    loadChildren: 'app/watchlist/watchlist.module#WatchListModule',
    data: {
      breadcrumbs: 'WatchList'
    }
  },
  {
    path: 'companies',
    loadChildren: 'app/companies/companies.module#CompaniesModule',
    data: {
      breadcrumbs: 'Companies'
    }
  },
  {
    path: 'profile',
    loadChildren: 'app/profile/profile.module#ProfileModule',
    data: {
      breadcrumbs: 'Profile'
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
