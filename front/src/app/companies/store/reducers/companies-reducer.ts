import { Action } from '@ngrx/store';
import { Injector } from '@angular/core';

import { CompanyActions } from '../actions/company.actions';
import { Company } from '../../models/company';
import { Pager } from 'core/models/pager';
import { PagerService } from 'core/services/pager.service';

export interface ICompaniesState extends Pager {}

export const initialState: ICompaniesState = null;

const injector = Injector.create([{provide: PagerService, useClass: PagerService, deps: []}]);
const pagerService = injector.get(PagerService);

export function reducer (state: any = initialState, action: any): ICompaniesState {
  switch (action.type) {
    case CompanyActions.COMPANY_CONNECT: {
      console.log(`------------------ [SOCKET] client.id from server ${action.payload} ------------------`)
      return <ICompaniesState>state;
    }
    // TODO: implement disconnect case 
    // case CompanyActions.COMPANY_DISCONNECT: {
    //   console.log(`------------------ [SOCKET] client disconnected from server ${action.payload} ------------------`)
    //   return <ICompaniesState>state;
    // }
    case CompanyActions.COMPANYLIST_LOAD_SUCCESS: {
      const newState = Object.assign({}, state);
      return <Pager>{
        items: action.payload.items,
        count: action.payload.count,
        offset: pagerService.getPageOffset(newState),
        limit: pagerService.getPageLimit(newState)
      };
    }
  }

  return <ICompaniesState>state;

}
