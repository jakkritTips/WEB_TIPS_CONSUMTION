# TIPS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.


## STEP1. Install Environtment Angular
```
npm install -g @angular/cli
```

## STEP2. Install Nodemodules Folder
```
npm install
```

## STEP3. Install SignalR
```
npm install @microsoft/signalr --save
```

## STEP4. Build Appliaction Path IIS
```

ng build --base-href "/FuelConsumtion/" --prod

publish PRD: \\10.1.1.31\c$\inetpub\wwwroot8010-Intranet\Consumtion
publish API: \\10.1.1.31\c$\inetpub\wwwroot8010-Intranet\ConsumtionAPI
```



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


## Add file
Run `git add .`  

## Commit file
Run `git commit -m 'messsage update'` 

## Add push
Run `git push` 