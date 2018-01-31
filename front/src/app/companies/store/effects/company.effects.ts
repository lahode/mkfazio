import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { CompanyActions } from '../actions/company.actions';
import { CompanyService } from '../../services/company.service';
import { CompanyCompare } from '../../models/company-compare';
import { Range } from 'core/models/range';

@Injectable()
export class CompanyEffects {

  // Listen for the 'COMPANYLIST_LOAD_START' action
  @Effect() companyListAction$ = this.action$
    .ofType(CompanyActions.COMPANYLIST_LOAD_START)
    .map<Action, any>(toPayload)
    .switchMap((payload: Range) => this._company.list(payload)
      // If successful, dispatch COMPANYLIST_LOAD_SUCCESS
      .map<Action, any>((_result: any) => <Action>{ type: CompanyActions.COMPANYLIST_LOAD_SUCCESS, payload: _result })
        // On errors dispatch COMPANYLIST_LOAD_FAILED action with result
      .catch((res: any) => Observable.of({ type: CompanyActions.COMPANYLIST_LOAD_FAILED, payload: res }))
    );

  // Listen for the 'COMPANYCOMPARE_LOAD_START' action
  @Effect() companyCompareAction$ = this.action$
    .ofType(CompanyActions.COMPANYCOMPARE_LOAD_START)
    .map<Action, any>(toPayload)
    .switchMap((payload: CompanyCompare) => this._company.compareList(payload)
      // If successful, dispatch COMPANYCOMPARE_LOAD_SUCCESS
      .map<Action, any>((_result: any) => <Action>{ type: CompanyActions.COMPANYCOMPARE_LOAD_SUCCESS, payload: _result })
        // On errors dispatch COMPANYCOMPARE_LOAD_FAILED action with result
      .catch((res: any) => Observable.of({ type: CompanyActions.COMPANYCOMPARE_LOAD_FAILED, payload: res }))
    );

  // Listen for the 'COMPANY_LOAD_START' action
  @Effect() companyLoadAction$ = this.action$
      .ofType(CompanyActions.COMPANY_LOAD_START)
      .map<Action, any>(toPayload)
      .switchMap((payload: string) => this._company.get(payload)
        // If successful, dispatch COMPANYLIST_LOAD_SUCCESS
        .map<Action, any>((_result: any) => <Action>{ type: CompanyActions.COMPANY_LOAD_SUCCESS, payload: _result })
        // On errors dispatch COMPANY_LOAD_FAILED action with result
        .catch((res: any) => Observable.of({ type: CompanyActions.COMPANY_LOAD_FAILED, payload: res }))
      );

  // Listen for the 'COMPANY_REFRESH' action
  @Effect() companyConnectAction$ = this.action$
    .ofType(CompanyActions.COMPANY_REFRESH)
    .map<Action, any>(toPayload)
    .switchMap((payload: string) => this._company.refresh(payload)
      // If successful, dispatch COMPANYLIST_LOAD_SUCCESS
      .map<Action, any>((_result: any) => {
        console.log('RESULT IN EFFECT', _result);
        return <Action>{ type: CompanyActions.COMPANY_LOAD_SUCCESS, payload: _result };
      })
        // On errors dispatch COMPANY_LOAD_FAILED action with result
      .catch((res: any) => Observable.of({ type: CompanyActions.COMPANY_LOAD_FAILED, payload: res }))
    );

    constructor(
      private action$: Actions,
      private _company: CompanyService) {}

}
