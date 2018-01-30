import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { EndpointsService } from '../../../core/services/endpoints';
import { CompanyCompare } from '../../companies/models/company-compare';
import { Range } from 'core/models/range';

const PAGER_LIMIT = 10;

@Injectable()
export class MarketService {

  constructor(private readonly http: HttpClient,
              private readonly endpoints: EndpointsService) {}

  // List all markets or a range of markets
  public list(range?: Range): Observable<any> {
    const rangeToSearch: Range = (!range) ? {offset: 0, limit: PAGER_LIMIT} : range;
    return this.http.get(this.endpoints.marketList(rangeToSearch))
      // .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
  }

  // List all best companies by market
  public bestList(args: CompanyCompare): Observable<any> {
    return this.http.get(this.endpoints.marketBestList(args.id, args.type))
      // .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
  }

  // List all worse companies by market
  public worseList(args: CompanyCompare): Observable<any> {
    return this.http.get(this.endpoints.marketWorseList(args.id, args.type))
      // .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
  }

  // Get market detail by ID
  public get(id: string): Observable<any> {
    return this.http.get(this.endpoints.marketDetail(id))
//      .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
  }

  // Manage back-end error
  private _manageError(err) {
    const error = err.error;
    if (error.hasOwnProperty('message') && error.message) {
      return error.message;
    }
    return 'Erreur de connexion avec le serveur';
  }

}
