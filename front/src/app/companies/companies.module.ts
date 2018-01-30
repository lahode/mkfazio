/* Contrib modules */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

/* Routing */
import { RouterModule } from '@angular/router';
import { companyRoutes } from './companies.routing';

/* Custom modules */
import { CompanyStoreModule } from './store';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyChartComponent } from './components/company-chart/company-chart.component';
import { CompanyCompareComponent } from './components/company-compare/company-compare.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

export function highchartsFactory() {
  const hs = require('highcharts/highstock');
  const dd = require('highcharts/modules/drilldown');
  dd(hs);
  return hs;
}

@NgModule({
  declarations: [
    CompanyDetailComponent,
    CompanyListComponent,
    CompanyChartComponent,
    CompanyCompareComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    CompanyStoreModule.forRoot(),
    ChartModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forChild(companyRoutes)
  ],
  providers:  [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
})
export class CompaniesModule {}
