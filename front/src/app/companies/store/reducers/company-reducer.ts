import { Action } from '@ngrx/store';

import { CompanyActions } from '../actions/company.actions';
import { Company } from '../../models/company';

export interface ICompanyState extends Company {}

export const initialState: ICompanyState = null;

export function reducer (state: ICompanyState = initialState, action: any): ICompanyState {
  switch (action.type) {
    case CompanyActions.COMPANY_NEW: {
      return Object.assign({}, null);
    }

    case CompanyActions.COMPANY_LOAD_START: {
      return Object.assign({}, state);
    }

    case CompanyActions.COMPANY_LOAD_SUCCESS: {
      return Object.assign({}, action.payload);
    }

  }

  return <ICompanyState>state;

}
