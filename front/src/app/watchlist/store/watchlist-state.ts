import { Action } from '@ngrx/store';

import { IWatchListState } from './reducers/watchlist-reducer';

export interface WatchListStateI {
  watchlist?: IWatchListState;
}

export interface WatcherRecucerStateI {
  watchlist?: (state: IWatchListState, action: Action) => IWatchListState;
}
