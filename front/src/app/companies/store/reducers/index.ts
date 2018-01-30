import { ActionReducerMap, combineReducers, ActionReducer, Action } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromCompaniesCompare from './companies-compare-reducer';
import * as fromCompanies from './companies-reducer';
import * as fromCompany from './company-reducer';

import { CompanyStateI, CompanyRecucerStateI } from '../company-state';

declare const process: any;

export const reducer: CompanyRecucerStateI = {
  companiesCompare: fromCompaniesCompare.reducer,
  companies: fromCompanies.reducer,
  company: fromCompany.reducer,
};

export const reducers: ActionReducerMap<CompanyStateI> = reducer;
