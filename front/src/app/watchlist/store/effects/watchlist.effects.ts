import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { WatchListActions } from '../actions/watchlist.actions';
import { WatchListService } from '../../services/watchlist.service';
import { PagerService } from 'core/services/pager.service';
import { Range } from 'core/models/range';

@Injectable()
export class WatchListEffects {

  // Listen for the 'WATCHLIST_LOAD_START' action
  @Effect() watchListViewAction$ = this.action$
      .ofType(WatchListActions.WATCHLIST_LOAD_START)
      .switchMap<Action, any>(() => this._watchlist.list()
        // If successful, dispatch WATCHLIST_LOAD_SUCCESS
        .map<Action, any>((_result: any) => <Action>{ type: WatchListActions.WATCHLIST_LOAD_SUCCESS, payload: _result })
          // On errors dispatch WATCHLIST_LOAD_FAILED action with result
        .catch((res: any) => Observable.of({ type: WatchListActions.WATCHLIST_LOAD_FAILED, payload: res }))
      );

  // Listen for the 'WATCHLIST_ADD_START' action
  @Effect() watchListAddAction$ = this.action$
      .ofType(WatchListActions.WATCHLIST_ADD_START)
      .map<Action, any>(toPayload)
      .switchMap((payload: any) => this._watchlist.add(payload)
        // If successful, dispatch WATCHLIST_ADD_SUCCESS
        .map<Action, any>((_result: any) => <Action>{ type: WatchListActions.WATCHLIST_ADD_SUCCESS, payload: _result })
        // On errors dispatch WATCHLIST_ADD_FAILED action with result
        .catch((res: any) => Observable.of({ type: WatchListActions.WATCHLIST_ADD_FAILED, payload: res }))
        // Dispatch WatchListActions.list() to update the watchlist
        // .do(() => this.store$.dispatch(WatchListActions.list()))
      );

  // Listen for the 'WATCHLIST_UPDATE_START' action
  @Effect() watchListUpdateAction$ = this.action$
      .ofType(WatchListActions.WATCHLIST_UPDATE_START)
      .map<Action, any>(toPayload)
      .switchMap((payload: any) => this._watchlist.update(payload)
        // If successful, dispatch WATCHLIST_UPDATE_SUCCESS and WatchListActions.list()
        .map<Action, any>((_result: any) => <Action>{ type: WatchListActions.WATCHLIST_UPDATE_SUCCESS, payload: _result })
        // On errors dispatch WATCHLIST_UPDATE_FAILED action with result
        .catch((res: any) => Observable.of({ type: WatchListActions.WATCHLIST_UPDATE_FAILED, payload: res }))
        // Dispatch WatchListActions.list() to update the watchlist
        // .do(() => this.store$.dispatch(WatchListActions.list()))
      );

    // Listen for the 'WATCHLIST_REMOVE_START' action
    @Effect() watchListRemoveAction$ = this.action$
        .ofType(WatchListActions.WATCHLIST_REMOVE_START)
        .map<Action, any>(toPayload)
        .switchMap((payload: string) => this._watchlist.remove(payload)
          // If successful, dispatch WATCHLIST_REMOVE_SUCCESS
          .map<Action, any>((_result: any) => <Action>{ type: WatchListActions.WATCHLIST_REMOVE_SUCCESS, payload: _result })
          // On errors dispatch WATCHLIST_REMOVE_FAILED action with result
          .catch((res: any) => Observable.of({ type: WatchListActions.WATCHLIST_REMOVE_FAILED, payload: res }))
          // Dispatch WatchListActions.list() to update the watchlist
          // .do(() => this.store$.dispatch(WatchListActions.list()))
        );

    constructor(private action$: Actions,
                private _watchlist: WatchListService,
                // private store$: Store<Action>
              ) {}

}
