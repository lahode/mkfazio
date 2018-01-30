import { Action } from '@ngrx/store';

import { MarketActions } from '../actions/market.actions';
import { Market } from '../../models/market';

export interface IMarketWorseState extends Array<Market> {}

export const initialState: IMarketWorseState = null;

export function reducer (state: any = initialState, action: any): IMarketWorseState {
  switch (action.type) {
    case MarketActions.MARKETWORSE_LOAD_SUCCESS: {
      return Object.assign([], state, action.payload);
    }
  }

  return <IMarketWorseState>state;

}
