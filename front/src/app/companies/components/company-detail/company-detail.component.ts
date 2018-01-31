import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { CompanyActions } from '../../store';
import { WatchListActions } from '../../../watchlist/store';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit, OnDestroy {

  public company$: Observable<any>;
  public companyID: string;
  public disableAddWatchList: boolean = false;
  public watchListSubscription: any;

  constructor(private store: Store<any>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Load the company from it's ID
    this.route.params.subscribe(params => {
      this.store.dispatch(<Action>CompanyActions.load(params.id));
      this.store.dispatch(<Action>CompanyActions.refresh(params.id));
      this.companyID = params.id;
    });

    // Check if watchlist already contains this company
    this.watchListSubscription = this.store.select(state => state.watchlist).subscribe((watchlist) => {
      this.disableAddWatchList = false;
      watchlist.map((w) => {
        if ('' + w.company.id === '' + this.companyID) {
          this.disableAddWatchList = true;
        }
      });
    });

    // Select the company from store
    this.company$ = this.store.select(state => state)
      .filter((state) => state.loading.length === 0)
      .filter((state) => state.company)
      .map(state => state.company);
  }

  // Add the company the the watchlist
  addToWatchList(company) {
    this.store.dispatch(<Action>WatchListActions.add(company));
  }

  // Destroy the watchlist subscription
  ngOnDestroy() {
    this.watchListSubscription.unsubscribe();
  }

}
