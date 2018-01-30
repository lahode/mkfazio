import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';

import { MarketActions } from '../../store';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss']
})
export class MarketListComponent implements OnInit {

  public markets$: Observable<any>;

  constructor(private store: Store<any>,
              private router: Router) { }

  ngOnInit() {
    this.store.dispatch(<Action>MarketActions.list());
    this.markets$ = this.store.select(state => state.markets);
  }

}
