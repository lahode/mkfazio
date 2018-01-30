import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WatchListService } from '../services/watchlist.service';
import { WatchListEffects } from './effects/watchlist.effects';

import { reducers } from './reducers';

export const WatchListProviders = [
  WatchListService
];

@NgModule({
  imports: [
    StoreModule.forFeature('watchlist', reducers.watchlist),
    EffectsModule.forFeature([WatchListEffects]),
  ],
  exports: [
    StoreModule,
    EffectsModule
  ],
  providers: [WatchListProviders]
})
export class WatchListStoreModule {
  static forRoot() {
    return {
      ngModule: WatchListStoreModule,
      providers: [WatchListProviders]
    };
  }
}
