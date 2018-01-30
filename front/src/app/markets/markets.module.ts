/* Contrib modules */
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

/* Routing */
import { RouterModule } from '@angular/router';
import { marketRoutes } from './markets.routing';

/* Custom modules */
import { MarketStoreModule } from './store';
import { MarketDetailComponent } from './components/market-detail/market-detail.component';
import { MarketListComponent } from './components/market-list/market-list.component';
import { MarketRankingComponent } from './components/market-ranking/market-ranking.component';

@NgModule({
  declarations: [
    MarketDetailComponent,
    MarketListComponent,
    MarketRankingComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    MarketStoreModule.forRoot(),
    RouterModule.forChild(marketRoutes)
  ],
  exports: [
    MarketListComponent
  ],
  providers: [],
})
export class MarketsModule {}
