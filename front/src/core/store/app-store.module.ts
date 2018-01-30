import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';

import { reducers, metaReducers } from './reducers';
import { EndpointsService } from '../services/endpoints';
import { StorageService } from '../services/storage.service';
import { PagerService } from '../services/pager.service';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = route.params;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

export const AppProviders = [
  EndpointsService,
  StorageService,
  PagerService,
  { provide: RouterStateSerializer, useClass: CustomSerializer }
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule
  ],
})
export class AppStoreModule {
  static forRoot() {
    return {
      ngModule: AppStoreModule,
      providers: [AppProviders]
    };
  }
}
