import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as socketIo from 'socket.io-client';
import { environment } from '../../../environments/environment';

import { EndpointsService } from '../../../core/services/endpoints';
import { CompanyCompare } from '../models/company-compare';
// import { Range } from 'core/models/range';

const PAGER_LIMIT = 10;

@Injectable()
export class CompanyService {

  private socket: SocketIOClient.Socket;
  connected$ = new BehaviorSubject<string|null>(null);

  constructor(private readonly http: HttpClient,
              private readonly endpoints: EndpointsService) {}

  // // List all companies or a range of markets
  // public list(range?: Range): Observable<any> {
  //   const rangeToSearch: Range = (!range) ? {offset: 0, limit: PAGER_LIMIT} : range;
  //   return this.http.get(this.endpoints.companyList(rangeToSearch))
  //     // .shareReplay()
  //     .catch(err => Observable.throw(this._manageError(err)));
  // }

  public compareList(args: CompanyCompare): Observable<any> {
    return this.http.get(this.endpoints.companyCompare(args.id, args.type))
      // .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
  }

  // Get company detail by ID
  public get(id: string): Observable<any> {
    return this.http.get(this.endpoints.companyDetail(id))
      // .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
  }

  // Get automatic company detail updates by ID
  public connect(id: string): Observable<any> {
    const baseURL = environment.socket.baseUrl;
    this.socket = socketIo(baseURL, environment.socket.config);
    this.socket.on('connect', clientID => this.connected$.next(clientID));
    return this.connected$;
    // return Observable.of(this.socket.on('connected', () => {
    //   return this.http.get(`${baseURL}/api/get-updated-company/${id}`)
    //     .map(() => this.socket.on('companyUpdate', data => Observable.of(data)))
    //     .catch(err => Observable.throw(this._manageError(err)));
    // }));
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
