/* Contrib modules */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { DragulaModule } from 'ng2-dragula';

/* Routing */
import { RouterModule } from '@angular/router';
import { marketRoutes } from './watchlist.routing';

/* Custom modules */
import { WatchListStoreModule } from './store';
import { WatchListComponent } from './components/watchlist/watchlist.component';
import { WatchListCompareComponent } from './components/watchlist-compare/watchlist-compare.component';
import { WatchListMenuComponent } from './components/watchlist-menu/watchlist-menu.component';

@NgModule({
  declarations: [
    WatchListComponent,
    WatchListCompareComponent,
    WatchListMenuComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DragulaModule,
    WatchListStoreModule.forRoot(),
    RouterModule.forChild(marketRoutes)
  ],
  exports: [
    WatchListComponent,
    WatchListMenuComponent
  ],
  providers: [],
})
export class WatchListModule {}
