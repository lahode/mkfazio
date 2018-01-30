import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { MarketActions } from '../actions/market.actions';
import { MarketService } from '../../services/market.service';
import { CompanyCompare } from '../../../companies/models/company-compare';
import { Range } from 'core/models/range';

@Injectable()
export class MarketEffects {

  // Listen for the 'MARKETLIST_LOAD_START' action
  @Effect() marketListAction$ = this.action$
      .ofType(MarketActions.MARKETLIST_LOAD_START)
      .map<Action, any>(toPayload)
      .switchMap((payload: Range) => this._market.list(payload)
        // If successful, dispatch MARKETLIST_LOAD_SUCCESS
        .map<Action, any>((_result: any) => <Action>{ type: MarketActions.MARKETLIST_LOAD_SUCCESS, payload: _result })
          // On errors dispatch MARKETLIST_LOAD_FAILED action with result
        .catch((res: any) => Observable.of({ type: MarketActions.MARKETLIST_LOAD_FAILED, payload: res }))
      );

  // Listen for the 'MARKETBEST_LOAD_START' action
  @Effect() marketBestAction$ = this.action$
    .ofType(MarketActions.MARKETBEST_LOAD_START)
    .map<Action, any>(toPayload)
    .switchMap((payload: CompanyCompare) => this._market.bestList(payload)
      // If successful, dispatch MARKETBEST_LOAD_SUCCESS
      .map<Action, any>((_result: any) => <Action>{ type: MarketActions.MARKETBEST_LOAD_SUCCESS, payload: _result })
        // On errors dispatch MARKETBEST_LOAD_FAILED action with result
      .catch((res: any) => Observable.of({ type: MarketActions.MARKETBEST_LOAD_FAILED, payload: res }))
    );

    // Listen for the 'MARKETWORSE_LOAD_START' action
    @Effect() marketWorseAction$ = this.action$
      .ofType(MarketActions.MARKETWORSE_LOAD_START)
      .map<Action, any>(toPayload)
      .switchMap((payload: CompanyCompare) => this._market.worseList(payload)
        // If successful, dispatch MARKETWORSE_LOAD_SUCCESS
        .map<Action, any>((_result: any) => <Action>{ type: MarketActions.MARKETWORSE_LOAD_SUCCESS, payload: _result })
          // On errors dispatch MARKETWORSE_LOAD_FAILED action with result
        .catch((res: any) => Observable.of({ type: MarketActions.MARKETWORSE_LOAD_FAILED, payload: res }))
      );

  // Listen for the 'MARKET_LOAD_START' action
  @Effect() marketLoadAction$ = this.action$
      .ofType(MarketActions.MARKET_LOAD_START)
      .map<Action, any>(toPayload)
      .switchMap((payload: string) => this._market.get(payload)
        // If successful, dispatch MARKET_LOAD_SUCCESS
        .map<Action, any>((_result: any) => <Action>{ type: MarketActions.MARKET_LOAD_SUCCESS, payload: _result })
        // On errors dispatch MARKET_LOAD_FAILED action with result
        .catch((res: any) => Observable.of({ type: MarketActions.MARKET_LOAD_FAILED, payload: res }))
      );

    constructor(
      private action$: Actions,
      private _market: MarketService
    ) {}

}
