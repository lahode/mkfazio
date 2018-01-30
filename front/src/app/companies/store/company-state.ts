import { Action } from '@ngrx/store';

import { ICompaniesCompareState } from './reducers/companies-compare-reducer';
import { ICompaniesState } from './reducers/companies-reducer';
import { ICompanyState } from './reducers/company-reducer';

export interface CompanyStateI {
  companiesCompare?: ICompaniesCompareState;
  companies?: ICompaniesState;
  company?: ICompanyState;
}

export interface CompanyRecucerStateI {
  companiesCompare?: (state: ICompaniesCompareState, action: Action) => ICompaniesCompareState;
  companies?: (state: ICompaniesState, action: Action) => ICompaniesState;
  company?: (state: ICompanyState, action: Action) => ICompanyState;
}
