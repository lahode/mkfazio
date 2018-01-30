import { Component, OnInit, Input } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CompanyActions } from '../../store';

@Component({
  selector: 'app-company-compare',
  templateUrl: './company-compare.component.html',
  styleUrls: ['./company-compare.component.scss']
})
export class CompanyCompareComponent implements OnInit {

  @Input() companyID: string;
  public selected = 'oneday';
  public companies$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(<Action>CompanyActions.compare({id : this.companyID, type: this.selected}));
    this.companies$ = this.store.select(state => state.companiesCompare);
  }

  select(item) {
    this.selected = item;
    this.store.dispatch(<Action>CompanyActions.compare({id : this.companyID, type: this.selected}));
  }

  isActive(item) {
    return this.selected === item;
  }
}
