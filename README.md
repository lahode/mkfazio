# The market player

This project has a front-end part in Angular and a back-end in NodeJS

## Run Front

cd front
npm i
ng serve

## Run Back

cd server
npm i
npm run dev

# Socket in Front - Get company detail every 60 seconds

See files:
/src/app/companies/company-detail/company-detail.components.ts
Line 28 : this.store.dispatch(<Action>CompanyActions.connect(params.id));

/src/app/companies/company-detail/store/actions/company.actions.ts
Line 20 and 60 :   COMPANY_CONNECT  /   connect(_credentials) {

/src/app/companies/company-detail/store/effects/company.effects.ts
Line 48: @Effect() companyConnectAction$ = this.action$

/src/app/companies/company-detail/reducers/effects/company.reducers.ts
Line 20: case CompanyActions.COMPANY_LOAD_SUCCESS: {

/src/app/companies/company-detail/services/company.service.ts
Line 44: public connect(id: string): Observable<any> {


# Socket in Back - Get company detail every 60 seconds
/src/index.ts
Line 100 à 145: See createServer(), listen(), listenSocket() and initSocket() boostraped from server.ts

/src/modules/routes/company.route.ts
Function getUpdatedCompany called from api.route.ts
