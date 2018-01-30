import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';

import { CompanyActions } from '../../store';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companies$: Observable<any>;

  constructor(private store: Store<any>,
              private router: Router) { }

  ngOnInit() {
    this.store.dispatch(<Action>CompanyActions.list());
    this.companies$ = this.store.select(state => state.companies);
  }

  changeResult(event) {
    this.store.dispatch(<Action>CompanyActions.list({ offset: event.page - 1, limit: event.itemsPerPage }));
  }

}
