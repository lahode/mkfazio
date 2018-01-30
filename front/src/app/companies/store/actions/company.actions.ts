import { Action } from '@ngrx/store';

/**
 * Define every actions for Companies
 */
export const CompanyActions = {

  CONFIRM_DIALOG: 'CONFIRM_DIALOG',

  COMPANYLIST_LOAD_START : 'COMPANYLIST_LOAD_START',
  COMPANYLIST_LOAD_SUCCESS : 'COMPANYLIST_LOAD_SUCCESS',
  COMPANYLIST_LOAD_FAILED : 'COMPANYLIST_LOAD_FAILED',

  COMPANYCOMPARE_LOAD_START : 'COMPANYCOMPARE_LOAD_START',
  COMPANYCOMPARE_LOAD_SUCCESS : 'COMPANYCOMPARE_LOAD_SUCCESS',
  COMPANYCOMPARE_LOAD_FAILED : 'COMPANYCOMPARE_LOAD_FAILED',

  COMPANY_NEW : 'COMPANY_NEW',

  COMPANY_CONNECT : 'COMPANY_CONNECT',

  COMPANY_LOAD_START : 'COMPANY_LOAD_START',
  COMPANY_LOAD_SUCCESS : 'COMPANY_LOAD_SUCCESS',
  COMPANY_LOAD_FAILED : 'COMPANY_LOAD_FAILED',

  confirm(_credentials = null) {
    return <Action>{
      type: CompanyActions.CONFIRM_DIALOG,
      payload: _credentials
    };
  },

  list(_credentials = null) {
    return <Action>{
      type: CompanyActions.COMPANYLIST_LOAD_START,
      payload: _credentials
    };
  },

  compare(_credentials = null) {
    return <Action>{
      type: CompanyActions.COMPANYCOMPARE_LOAD_START,
      payload: _credentials
    };
  },

  new() {
    return <Action>{
      type: CompanyActions.COMPANY_NEW
    };
  },

  load(_credentials) {
    return <Action>{
      type: CompanyActions.COMPANY_LOAD_START,
      payload: _credentials
    };
  },

  connect(_credentials) {
    return <Action>{
      type: CompanyActions.COMPANY_CONNECT,
      payload: _credentials
    };
  }
};
