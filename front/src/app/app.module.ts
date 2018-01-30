/* Contrib modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

/* RxJS imports */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/observable/throw';

/* Custom modules */
import { MarketsModule } from './markets/markets.module';
import { CompaniesModule } from './companies/companies.module';
import { WatchListModule } from './watchlist/watchlist.module';

/* Routing */
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './shared/error/error.component';
import { ConfirmComponent } from './shared/confirm/confirm.component';

/* Services */
import { LocalDataStorageService } from './shared/localdata-storage.service';

/* Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppStoreModule } from '../core/store';

/**
 * Custom Http Loader for translation
 * (AoT requires an exported function for factories)
 */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoadingComponent,
    ErrorComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MatDialogModule,
    BrowserAnimationsModule,
    MarketsModule,
    WatchListModule,
    AppStoreModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: false }),
    McBreadcrumbsModule.forRoot(),
    StoreDevtoolsModule.instrument(),
  ],
  entryComponents: [
    ErrorComponent,
    ConfirmComponent
  ],
  providers: [
    LocalDataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
