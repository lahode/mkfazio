import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetkeyPipe } from './getkey.pipe';
import { OrderByPipe } from './orderby.pipe';
import { ObjtoarrayPipe } from './objtoarray.pipe';
import { Nl2brPipe } from './nl2br.pipe';
import { MarketNegativePipe } from './market-negative.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    GetkeyPipe,
    OrderByPipe,
    ObjtoarrayPipe,
    Nl2brPipe,
    MarketNegativePipe
  ],
  declarations: [
    GetkeyPipe,
    OrderByPipe,
    ObjtoarrayPipe,
    Nl2brPipe,
    MarketNegativePipe
  ]
})
export class SharedModule {}
