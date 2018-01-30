import { Action } from '@ngrx/store';

import { MarketActions } from '../actions/market.actions';
import { Market } from '../../models/market';

export interface IMarketBestState extends Array<Market> {}

export const initialState: IMarketBestState = null;

export function reducer (state: any = initialState, action: any): IMarketBestState {
  switch (action.type) {
    case MarketActions.MARKETBEST_LOAD_SUCCESS: {
      return Object.assign([], state, action.payload);
    }
  }

  return <IMarketBestState>state;

}
