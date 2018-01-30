import * as express from 'express';

import { CompanyRoutes }  from "./company.route";

const app = express();

export class APIRoutes {

  routes() {
    app.get("/api/get-updated-company/:id", CompanyRoutes.getUpdatedCompany);
    // this.callRoute('get', "/api/get-updated-company/:id", CompanyRoutes.getUpdatedCompany, []);
    return app;
  }

  /*
  callRoute(method, url, func, permission) {
    console.log(url)
    app[method](url, func);
  }
  */

}
