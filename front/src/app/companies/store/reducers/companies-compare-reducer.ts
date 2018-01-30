import { Action } from '@ngrx/store';

import { CompanyActions } from '../actions/company.actions';
import { Company } from '../../models/company';

export interface ICompaniesCompareState extends Array<Company> {}

export const initialState: ICompaniesCompareState = null;

export function reducer (state: any = initialState, action: any): ICompaniesCompareState {
  switch (action.type) {
    case CompanyActions.COMPANYCOMPARE_LOAD_SUCCESS: {
      return Object.assign([], state, action.payload);
    }
  }

  return <ICompaniesCompareState>state;

}
