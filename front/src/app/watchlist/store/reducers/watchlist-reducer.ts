import { Action } from '@ngrx/store';

import { WatchListActions } from '../actions/watchlist.actions';
import { Watcher } from '../../models/watcher';

export interface IWatchListState extends Array<Watcher> {}

export const initialState: IWatchListState = [];

export function reducer (state: any = initialState, action: any): IWatchListState {
  switch (action.type) {
    case WatchListActions.WATCHLIST_LOAD_SUCCESS: {
      return Object.assign([], state);
      // return Object.assign([], state, action.payload);
    }

    case WatchListActions.WATCHLIST_UPDATE_SUCCESS: {
      return Object.assign([], [...state.map((item: Watcher) => {
        return item.id === action.payload.id ? action.payload : item;
      })]);
    }

    case WatchListActions.WATCHLIST_REMOVE_SUCCESS: {
      return Object.assign([], [...state.filter((item: Watcher) => {
        return item.id !== action.payload.id;
      })]);
    }

    case WatchListActions.WATCHLIST_ADD_SUCCESS: {
      return Object.assign([], [...state, action.payload]);
    }

  }

  return <IWatchListState>state;

}
