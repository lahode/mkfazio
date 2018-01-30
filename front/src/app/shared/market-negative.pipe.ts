import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketNegative'
})
export class MarketNegativePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value && value.substr(0, 1) === '-') {
      return '<span class="negative">' + value + '</span>';
    }
    return value;
  }

}
