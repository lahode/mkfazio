import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MarketService } from '../services/market.service';
import { MarketEffects } from './effects/market.effects';

import { reducers } from './reducers';

export const MarketProviders = [
  MarketService
];

@NgModule({
  imports: [
    StoreModule.forFeature('markets', reducers.markets),
    StoreModule.forFeature('market', reducers.market),
    StoreModule.forFeature('marketBest', reducers.marketBest),
    StoreModule.forFeature('marketWorse', reducers.marketWorse),
    EffectsModule.forFeature([MarketEffects]),
  ],
  exports: [
    StoreModule,
    EffectsModule
  ],
  providers: [MarketProviders]
})
export class MarketStoreModule {
  static forRoot() {
    return {
      ngModule: MarketStoreModule,
      providers: [MarketProviders]
    };
  }
}
