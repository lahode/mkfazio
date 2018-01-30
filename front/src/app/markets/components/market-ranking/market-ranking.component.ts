import { Component, OnInit, Input } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { MarketActions } from '../../store';

@Component({
  selector: 'app-market-ranking',
  templateUrl: './market-ranking.component.html',
  styleUrls: ['./market-ranking.component.scss']
})
export class MarketRankingComponent implements OnInit {

  @Input() marketID: string;
  @Input() marketType = 'best';
  public selected = 'oneday';
  public companies$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    if (this.marketType === 'best') {
      this.store.dispatch(<Action>MarketActions.best({id : this.marketID, type: this.selected}));
      this.companies$ = this.store.select(state => state.marketBest);
    } else {
      this.store.dispatch(<Action>MarketActions.worse({id : this.marketID, type: this.selected}));
      this.companies$ = this.store.select(state => state.marketWorse);
    }
  }

  select(item) {
    this.selected = item;
    if (this.marketType === 'best') {
      this.store.dispatch(<Action>MarketActions.best({id : this.marketID, type: this.selected}));
    } else {
      this.store.dispatch(<Action>MarketActions.worse({id : this.marketID, type: this.selected}));
    }
  }

  isActive(item) {
    return this.selected === item;
  }
}
