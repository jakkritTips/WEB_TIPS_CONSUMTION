import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';

// Environment
import { environment } from 'src/environments/environment';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// GOOGLE AUTHERIZE
import { GoogleLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { AuthGuardService } from './../app/services/auth-guard.service';

// PAGE
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// Service
import { HttpExtensions } from './services/http-extensions';
import { AuthenticationService } from './services/authentication.service';
import { FAASService } from './services/faas.service';
import { FuelYearlyComponent } from './fuel-yearly/fuel-yearly.component';
import { FuelBudgetPerMonthComponent } from './pages/fuel-budget-per-month/fuel-budget-per-month.component';
import { FuelPublicCarComponent } from './pages/fuel-public-car/fuel-public-car.component';
import { FuelSparateByPlantComponent } from './pages/fuel-sparate-by-plant/fuel-sparate-by-plant.component';
import { FuelB4PurchaseComponent } from './pages/fuel-b4-purchase/fuel-b4-purchase.component';
import { FuelCD1PurchaseComponent } from './pages/fuel-cd1-purchase/fuel-cd1-purchase.component';
import { ThroughputPlanB4Component } from './pages/throughput-plan-b4/throughput-plan-b4.component';
import { ThroughputRecordB4Component } from './pages/throughput-record-b4/throughput-record-b4.component';
import { ThroughputPlanCD1Component } from './pages/throughput-plan-cd1/throughput-plan-cd1.component';
import { ThroughputRecordCD1Component } from './pages/throughput-record-cd1/throughput-record-cd1.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FuelYearlyComponent,
    FuelBudgetPerMonthComponent,
    FuelPublicCarComponent,
    FuelSparateByPlantComponent,
    FuelB4PurchaseComponent,
    FuelCD1PurchaseComponent,
    ThroughputPlanB4Component,
    ThroughputRecordB4Component,
    ThroughputPlanCD1Component,
    ThroughputRecordCD1Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.googleClientID
            )
          }
        ]
      } as SocialAuthServiceConfig,
    } ,   AuthGuardService ,HttpExtensions, AuthenticationService, FAASService  
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
