import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import * as socketIo from 'socket.io-client';
import { environment } from '../../../environments/environment';

import { EndpointsService } from '../../../core/services/endpoints';
import { CompanyCompare } from '../models/company-compare';
import { Range } from 'core/models/range';

const PAGER_LIMIT = 10;

@Injectable()
export class CompanyService {

  private socket: SocketIOClient.Socket;

  constructor(private readonly http: HttpClient,
              private readonly endpoints: EndpointsService) {}

  // List all companies or a range of markets
  public list(range?: Range): Observable<any> {
    const rangeToSearch: Range = (!range) ? {offset: 0, limit: PAGER_LIMIT} : range;
    return this.http.get(this.endpoints.companyList(rangeToSearch))
      // .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
  }

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

  // Refresh automatically company detail by ID
  public refresh(id: string): Observable<any> {
    const baseURL = environment.socket.baseUrl;
    const observable = new Observable(observer => {
      this.socket = socketIo(baseURL, environment.socket.config);
      this.socket
        .emit('companyRefresh', id)
        .on('companyRefreshSuccess', (company) => {
          observer.next(company);
        })
        .on('companyRefreshFailed', (err) => {
          console.log('Erreur recue', err);
          this.socket.disconnect();
          observer.error(err);
          observer.complete();
        });
    });
    return observable;
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
