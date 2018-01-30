import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CompanyService } from '../services/company.service';
import { CompanyEffects } from './effects/company.effects';

import { reducers } from './reducers';

export const CompanyProviders = [
  CompanyService
];

@NgModule({
  imports: [
    StoreModule.forFeature('companiesCompare', reducers.companiesCompare),
    StoreModule.forFeature('companies', reducers.companies),
    StoreModule.forFeature('company', reducers.company),
    EffectsModule.forFeature([CompanyEffects]),
  ],
  exports: [
    StoreModule,
    EffectsModule
  ],
  providers: [CompanyProviders]
})
export class CompanyStoreModule {
  static forRoot() {
    return {
      ngModule: CompanyStoreModule,
      providers: [CompanyProviders]
    };
  }
}
