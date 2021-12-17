# TIPS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Install PRIMENG UI
```
npm install primeng --save
npm install primeicons --save
```

## Import PRIMENG UI
```
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
```

## PRIMENG Styles
```
node_modules/primeicons/primeicons.css
node_modules/primeng/resources/themes/saga-blue/theme.css
node_modules/primeng/resources/primeng.min.css

```

## Free Themes
```
primeng/resources/themes/bootstrap4-light-blue/theme.css
primeng/resources/themes/bootstrap4-light-purple/theme.css
primeng/resources/themes/bootstrap4-dark-blue/theme.css
primeng/resources/themes/bootstrap4-dark-purple/theme.css
primeng/resources/themes/md-light-indigo/theme.css
primeng/resources/themes/md-light-deeppurple/theme.css
primeng/resources/themes/md-dark-indigo/theme.css
primeng/resources/themes/md-dark-deeppurple/theme.css
primeng/resources/themes/mdc-light-indigo/theme.css
primeng/resources/themes/mdc-light-deeppurple/theme.css
primeng/resources/themes/mdc-dark-indigo/theme.css
primeng/resources/themes/mdc-dark-deeppurple/theme.css
primevue/resources/themes/tailwind/tailwind-light/theme.css
primeng/resources/themes/fluent-light/theme.css
primeng/resources/themes/saga-blue/theme.css
primeng/resources/themes/saga-green/theme.css
primeng/resources/themes/saga-orange/theme.css
primeng/resources/themes/saga-purple/theme.css
primeng/resources/themes/vela-blue/theme.css
primeng/resources/themes/vela-green/theme.css
primeng/resources/themes/vela-orange/theme.css
primeng/resources/themes/vela-purple/theme.css
primeng/resources/themes/arya-blue/theme.css
primeng/resources/themes/arya-green/theme.css
primeng/resources/themes/arya-orange/theme.css
primeng/resources/themes/arya-purple/theme.css
primeng/resources/themes/nova/theme.css
primeng/resources/themes/nova-alt/theme.css
primeng/resources/themes/nova-accent/theme.css
primeng/resources/themes/luna-amber/theme.css
primeng/resources/themes/luna-blue/theme.css
primeng/resources/themes/luna-green/theme.css
primeng/resources/themes/luna-pink/theme.css
primeng/resources/themes/rhea/theme.css

```

## Scolling
```
npm install @angular/cdk --save
```

## Install Call API
``` 
npm i axios
```
## Install PWA
```
ng add @angular/pwa
```

## Install Social Login
```
npm install angularx-social-login
```

## Allow Extension .webmanifest IN IIS
add MIME Type IIS
.webmanifest
application/manifest+json

```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="AngularPageRefresh" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/appname/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## Install SignalR
```
npm install @microsoft/signalr --save
```

## Convert Image
```
npm install ng2-img-max blueimp-canvas-to-blob --save  
```

## Chart JS
```
npm install chart.js --save
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
