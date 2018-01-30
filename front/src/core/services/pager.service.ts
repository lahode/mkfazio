import { Injectable } from '@angular/core';

import { Pager } from '../models/pager';
import { Range } from '../models/range';

@Injectable()
export class PagerService {

  // Return the range for the pager.
  public getRange(payload: any): Range {
    const offset = this.getPageOffset(payload);
    const limit = this.getPageLimit(payload);
    return <Range>{offset, limit};
  }

  // Return the page index for the pager.
  public getPageOffset (payload: any): number {
    return payload && payload.hasOwnProperty('offset') && !isNaN(payload.offset) ? payload.offset : 0;
  }

  // Return the page size for the pager.
  public getPageLimit (payload: any): number {
    return payload && payload.hasOwnProperty('limit') && !isNaN(payload.limit) ? payload.limit : 10;
  }

}
