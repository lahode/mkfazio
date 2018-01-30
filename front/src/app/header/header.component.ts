import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';
import { Store, Action } from '@ngrx/store';

import { MarketActions } from '../markets/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isLoggedIn$: Observable<boolean>;
  public currentLang = 'en';
  public markets$: Observable<any>;

  constructor(public translate: TranslateService,
              private store: Store<any>,
              private router: Router) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang(this.currentLang);
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.store.dispatch(<Action>MarketActions.list());
    this.markets$ = this.store.select(state => state.markets);
    this.isLoggedIn$ = this.store.select(state => state.currentUser).map(user => user !== null);
  }

  logout() {
    this.store.dispatch({type: 'LOGOUT_START'});
  }

  setLanguage(value) {
    this.translate.use(value);
    this.currentLang = value;
  }

  viewMarket(marketID: string) {
    this.store.dispatch(<Action>MarketActions.load(marketID));
    this.router.navigate(['markets']);
  }

}
