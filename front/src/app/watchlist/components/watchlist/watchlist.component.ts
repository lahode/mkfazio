import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { WatchListActions } from '../../store';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchListComponent implements OnInit {

  public watchlist$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(<Action>WatchListActions.list());
    this.watchlist$ = this.store.select(state => state.watchlist);
  }

}
