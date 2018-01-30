import { Action } from '@ngrx/store';

import { MarketActions } from '../actions/market.actions';
import { Market } from '../../models/market';

export interface IMarketState extends Market {}

export const initialState: IMarketState = null;

export function reducer (state: IMarketState = initialState, action: any): IMarketState {
  switch (action.type) {
    case MarketActions.MARKET_NEW: {
      return Object.assign({}, null);
    }

    case MarketActions.MARKET_LOAD_START: {
      return Object.assign({}, state);
    }

    case MarketActions.MARKET_LOAD_SUCCESS: {
      return Object.assign({}, action.payload);
    }

  }

  return <IMarketState>state;

}
