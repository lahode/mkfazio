import { Action } from '@ngrx/store';

/**
 * Define every actions for Markets
 */
export const MarketActions = {

  CONFIRM_DIALOG: 'CONFIRM_DIALOG',

  MARKETBEST_LOAD_START : 'MARKETBEST_LOAD_START',
  MARKETBEST_LOAD_SUCCESS : 'MARKETBEST_LOAD_SUCCESS',
  MARKETBEST_LOAD_FAILED : 'MARKETBEST_LOAD_FAILED',
  MARKETWORSE_LOAD_START : 'MARKETWORSE_LOAD_START',
  MARKETWORSE_LOAD_SUCCESS : 'MARKETWORSE_LOAD_SUCCESS',
  MARKETWORSE_LOAD_FAILED : 'MARKETWORSE_LOAD_FAILED',
  MARKETLIST_LOAD_START : 'MARKETLIST_LOAD_START',
  MARKETLIST_LOAD_SUCCESS : 'MARKETLIST_LOAD_SUCCESS',
  MARKETLIST_LOAD_FAILED : 'MARKETLIST_LOAD_FAILED',

  MARKET_NEW : 'MARKET_NEW',

  MARKET_LOAD_START : 'MARKET_LOAD_START',
  MARKET_LOAD_SUCCESS : 'MARKET_LOAD_SUCCESS',
  MARKET_LOAD_FAILED : 'MARKET_LOAD_FAILED',

  confirm(_credentials = null) {
    return <Action>{
      type: MarketActions.CONFIRM_DIALOG,
      payload: _credentials
    };
  },

  list(_credentials = null) {
    return <Action>{
      type: MarketActions.MARKETLIST_LOAD_START,
      payload: _credentials
    };
  },

  best(_credentials = null) {
    return <Action>{
      type: MarketActions.MARKETBEST_LOAD_START,
      payload: _credentials
    };
  },

  worse(_credentials = null) {
    return <Action>{
      type: MarketActions.MARKETWORSE_LOAD_START,
      payload: _credentials
    };
  },

  new() {
    return <Action>{
      type: MarketActions.MARKET_NEW
    };
  },

  load(_credentials) {
    return <Action>{
      type: MarketActions.MARKET_LOAD_START,
      payload: _credentials
    };
  },
};
