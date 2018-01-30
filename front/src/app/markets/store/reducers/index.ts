import { ActionReducerMap, combineReducers, ActionReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromMarkets from './markets-reducer';
import * as fromMarket from './market-reducer';
import * as fromMarketBest from './market-best-reducer';
import * as fromMarketWorse from './market-worse-reducer';

import { MarketStateI, MarketRecucerStateI } from '../market-state';

declare const process: any;

export const reducer: MarketRecucerStateI = {
  markets: fromMarkets.reducer,
  market: fromMarket.reducer,
  marketBest: fromMarketBest.reducer,
  marketWorse: fromMarketWorse.reducer
};

export const reducers: ActionReducerMap<MarketStateI> = reducer;
