import { Injectable, Inject } from '@angular/core';

import { Range } from '../models/range';

@Injectable()
export class EndpointsService {

  private server = 'https://tmp-d8-medev.c9users.io';

  companyList(range) {
    return this.server + `/api/company?limit=${range.limit}&offset=${range.offset}&order=-title`;
  }

  companyDetail(id: string) {
    return this.server + `/api/company/${id}`;
  }

  companyCompare(id: string, type: string) {
    return this.server + `/api/company/${id}/compare?type=${type}`;
  }

  marketList(range) {
    return this.server + `/api/market?limit=${range.limit}&offset=${range.offset}&order=-title`;
  }

  marketBestList(id: string, type: string) {
    return this.server + `/api/market/${id}/best?type=${type}`;
  }

  marketWorseList(id: string, type: string) {
    return this.server + `/api/market/${id}/worse?type=${type}`;
  }

  marketDetail(id: string) {
    return this.server + `/api/market/${id}`;
  }

}
