import { Routes, RouterModule } from '@angular/router';

import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

export const companyRoutes: Routes = [
  {
    path: '',
    component: CompanyListComponent,
    data: {
      breadcrumbs: ''
    }
  },
  {
    path: 'view/:id',
    component: CompanyDetailComponent,
    data: {
      breadcrumbs: 'Detail'
    }
  },
];
