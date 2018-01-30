import { Action } from '@ngrx/store';

/**
 * Define every actions for WatchList
 */
export const WatchListActions = {

  CONFIRM_DIALOG: 'CONFIRM_DIALOG',

  WATCHLIST_LOAD_START : 'WATCHLIST_LOAD_START',
  WATCHLIST_LOAD_SUCCESS : 'WATCHLIST_LOAD_SUCCESS',
  WATCHLIST_LOAD_FAILED : 'WATCHLIST_LOAD_FAILED',

  WATCHLIST_ADD_START : 'WATCHLIST_ADD_START',
  WATCHLIST_ADD_SUCCESS : 'WATCHLIST_ADD_SUCCESS',
  WATCHLIST_ADD_FAILED : 'WATCHLIST_ADD_FAILED',

  WATCHLIST_UPDATE_START : 'WATCHLIST_UPDATE_START',
  WATCHLIST_UPDATE_SUCCESS : 'WATCHLIST_UPDATE_SUCCESS',
  WATCHLIST_UPDATE_FAILED : 'WATCHLIST_UPDATE_FAILED',

  WATCHLIST_REMOVE_START : 'WATCHLIST_REMOVE_START',
  WATCHLIST_REMOVE_SUCCESS : 'WATCHLIST_REMOVE_SUCCESS',
  WATCHLIST_REMOVE_FAILED : 'WATCHLIST_REMOVE_FAILED',

  confirm(_credentials = null) {
    return <Action>{
      type: WatchListActions.CONFIRM_DIALOG,
      payload: _credentials
    };
  },

  list() {
    return <Action>{
      type: WatchListActions.WATCHLIST_LOAD_START,
    };
  },

  add(_credentials) {
    return <Action>{
      type: WatchListActions.WATCHLIST_ADD_START,
      payload: _credentials
    };
  },

  update(_credentials) {
    return <Action>{
      type: WatchListActions.WATCHLIST_UPDATE_START,
      payload: _credentials
    };
  },

  remove(_credentials) {
    return <Action>{
      type: WatchListActions.WATCHLIST_REMOVE_START,
      payload: _credentials
    };
  }

};
