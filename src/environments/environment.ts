// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: 'tips_auth',
  googleClientID: "667577253210-hmlser7kt6sodgk2si106d9qq4j9ubmb.apps.googleusercontent.com",
  googleClientSecret: "TykjwUvNWvXJ-oIa9jRXnMwQ",
  host:"http://localhost:4200/",
  hostAPI:"https://localhost:44309/api/",
  picture_profile:"picture_profile",

  // ERP 365 API
  userERP365:"ITUSR",
  passERP365:"lMHWAYuOtIK/L0WMHRCLlnQcOhfHerjinyD5sSTZWd0=",
  erpPageAssetCard:"https://api.businesscentral.dynamics.com/v2.0/206207c2-a899-4b50-9fdc-cd7ed6f63031/TIPSUAT/ODataV4/Company('My%20Company')/Fixed_Asset_Card_Excel"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
