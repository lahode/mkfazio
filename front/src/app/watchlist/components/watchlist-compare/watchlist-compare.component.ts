import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { DragulaService } from 'ng2-dragula';

import { WatchListActions } from '../../store';

@Component({
  selector: 'app-watchlist-compare',
  templateUrl: './watchlist-compare.component.html',
  styleUrls: ['./watchlist-compare.component.scss']
})
export class WatchListCompareComponent implements OnInit {

  public watchlist$: Observable<any>;

  constructor(private store: Store<any>,
              private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
  }

  private onDrop(args) {
    const [e, el, source] = args;
    const updatedWatchList: any = [];
    Array.from(source.children).map((item: HTMLElement, key: number) => {
      updatedWatchList[key] = {id: item.dataset.id, weight: key};
    });
    this.store.dispatch(<Action>WatchListActions.update(updatedWatchList));
  }


  ngOnInit() {
    this.store.dispatch(<Action>WatchListActions.list());
    this.watchlist$ = this.store.select(state => state.watchlist);
  }

}
