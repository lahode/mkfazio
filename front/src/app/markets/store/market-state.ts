import { Action } from '@ngrx/store';

import { IMarketsState } from './reducers/markets-reducer';
import { IMarketState } from './reducers/market-reducer';
import { IMarketBestState } from './reducers/market-best-reducer';
import { IMarketWorseState } from './reducers/market-worse-reducer';

export interface MarketStateI {
  markets?: IMarketsState;
  market?: IMarketState;
  marketBest?: IMarketBestState;
  marketWorse?: IMarketWorseState;
}

export interface MarketRecucerStateI {
  markets?: (state: IMarketsState, action: Action) => IMarketsState;
  market?: (state: IMarketState, action: Action) => IMarketState;
  marketBest?: (state: IMarketBestState, action: Action) => IMarketBestState;
  marketWorse?: (state: IMarketWorseState, action: Action) => IMarketWorseState;
}
