import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { EndpointsService } from '../../../core/services/endpoints';
import { Range } from 'core/models/range';

@Injectable()
export class WatchListService {

  constructor(private readonly http: HttpClient,
              private readonly endpoints: EndpointsService) {}

  // List all watchlist or a range of watchlist
  public list(range?: Range): Observable<any> {
    return Observable.of([]);
    /*
    return Observable.of([
        { id: 1, company: {title: 'Company 1', 'oneday' : 2.34, 'oneweek' : 1.98, 'onemonth' : 12.32} },
        { id: 2, company: {title: 'Company 2', 'oneday' : 1.25, 'oneweek' : 2.25, 'onemonth' : 11.33} },
        { id: 3, company: {title: 'Company 3', 'oneday' : 0.25, 'oneweek' : 1, 'onemonth' : -0.3} },
      ]);
    */
    /*
    return this.http.get(this.endpoints.watcherList(range))
      .shareReplay()
      .catch(err => Observable.throw(this._manageError(err)));
    */
  }

  // Get watcher detail by ID
  /*
  public get(id: string): Observable<any> {
    return Observable.of({
      id: id,
      title: `Watcher ${id}`,
      description: 'Lorem ipsum...'
    });
    */
    /*
    return this.http.get(this.endpoints.watcherDetail(id))
      .shareReplay()
      .map(response => (response as any).watcher)
      .catch(err => Observable.throw(this._manageError(err)));
    */
  // }

  // Add a new watcher
  public add(values: any): Observable<any> {
    return Observable.of({
      id: Math.floor(10000 * Math.random()),
      company: values
    });
    /*
    return this.http.post(this.endpoints.watcherCreate(), values)
      .shareReplay()
      .map(response => (response as any).user)
      .catch(err => {
        return Observable.throw(this._manageError(err))}
      );
    */
  }

  // Update a watcher
  public update(values: any): Observable<any> {
    return Observable.of({
      id: 1,
      title: `Watcher 1`,
      description: 'Lorem ipsum...'
    });
    /*
    return this.http.post(this.endpoints.watcherUpdate(), values)
      .shareReplay()
      .map(response => (response as any).user)
      .catch(err => {
        return Observable.throw(this._manageError(err))}
      );
    */
  }

  // Remove a watcher
  public remove(id: string): Observable<any> {
    return Observable.of({
      id: id,
    });
    /*
    return this.http.get(this.endpoints.watcherRemove(id))
      .shareReplay()
      .catch(err => {
        return Observable.throw(this._manageError(err))}
      );
    */
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
