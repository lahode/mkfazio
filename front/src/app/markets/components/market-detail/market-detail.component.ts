import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { MarketActions } from '../../store';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.scss']
})
export class MarketDetailComponent implements OnInit {

  public market$: Observable<any>;

  constructor(private store: Store<any>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(<Action>MarketActions.load(params.id));
    });

    this.market$ = this.store.select(state => state)
      .filter((state) => state.loading.length === 0)
      .filter((state) => state.market)
      .map(state => state.market);
  }

}
