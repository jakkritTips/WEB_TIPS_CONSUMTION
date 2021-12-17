import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../app/pages/login/login.component';
import { DashboardComponent } from './../app/pages/dashboard/dashboard.component';
import { AuthGuardService } from './../app/services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent  , canActivate: [AuthGuardService]},
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
