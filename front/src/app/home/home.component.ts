import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('fileInput') fileInput;

  public readonly user: Observable<any>;

  constructor(private readonly store: Store<any>) {
    this.user = this.store.select(state => state.currentUser);
  }

}
