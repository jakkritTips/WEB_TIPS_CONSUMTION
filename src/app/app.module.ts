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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
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
