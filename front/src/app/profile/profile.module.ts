/* Contrib modules */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { WatchListModule } from '../watchlist/watchlist.module';

/* Routing */
import { RouterModule } from '@angular/router';
import { profileRoutes } from './profile.routing';

/* Custom modules */
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    TranslateModule,
    WatchListModule,
    RouterModule.forChild(profileRoutes)
  ],
  providers: [],
})
export class ProfileModule {}
