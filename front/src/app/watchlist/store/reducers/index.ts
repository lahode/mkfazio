import { ActionReducerMap, combineReducers, ActionReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromWatchList from './watchlist-reducer';

import { WatchListStateI, WatcherRecucerStateI } from '../watchlist-state';

declare const process: any;

export const reducer: WatcherRecucerStateI = {
  watchlist: fromWatchList.reducer,
};

export const reducers: ActionReducerMap<WatchListStateI> = reducer;
