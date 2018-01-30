import { Action } from '@ngrx/store';
import { Injector } from '@angular/core';

import { MarketActions } from '../actions/market.actions';
import { Market } from '../../models/market';
import { Pager } from 'core/models/pager';
import { PagerService } from 'core/services/pager.service';

export interface IMarketsState extends Pager {}

export const initialState: IMarketsState = null;

const injector = Injector.create([{provide: PagerService, useClass: PagerService, deps: []}]);
const pagerService = injector.get(PagerService);

export function reducer (state: any = initialState, action: any): IMarketsState {
  switch (action.type) {
    case MarketActions.MARKETLIST_LOAD_SUCCESS: {
      const newState = Object.assign({}, state);
      return <Pager>{
        items: action.payload.items,
        count: action.payload.count,
        offset: pagerService.getPageOffset(newState),
        limit: pagerService.getPageLimit(newState)
      };
    }
  }

  return <IMarketsState>state;

}
