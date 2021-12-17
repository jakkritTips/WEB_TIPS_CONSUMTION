import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../app/pages/login/login.component';
import { DashboardComponent } from './../app/pages/dashboard/dashboard.component';
import { FuelYearlyComponent } from './../app/pages/fuel-yearly/fuel-yearly.component';
import { FuelBudgetPerMonthComponent } from './../app/pages/fuel-budget-per-month/fuel-budget-per-month.component';
import { FuelPublicCarComponent } from './../app/pages/fuel-public-car/fuel-public-car.component';
import { FuelSparateByPlantComponent } from './../app/pages/fuel-sparate-by-plant/fuel-sparate-by-plant.component';
import { FuelB4PurchaseComponent } from './../app/pages/fuel-b4-purchase/fuel-b4-purchase.component';
import { FuelCD1PurchaseComponent } from './../app/pages/fuel-cd1-purchase/fuel-cd1-purchase.component';
import { ThroughputPlanB4Component } from './../app/pages/throughput-plan-b4/throughput-plan-b4.component';
import { ThroughputRecordB4Component } from './../app/pages/throughput-record-b4/throughput-record-b4.component';
import { ThroughputPlanCD1Component } from './../app/pages/throughput-plan-cd1/throughput-plan-cd1.component';
import { ThroughputRecordCD1Component } from './../app/pages/throughput-record-cd1/throughput-record-cd1.component';


import { AuthGuardService } from './../app/services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent  , canActivate: [AuthGuardService]},
  { path: 'throughputplanb4', component: ThroughputPlanB4Component  , canActivate: [AuthGuardService]},
  { path: 'throughputrecordb4', component: ThroughputRecordB4Component  , canActivate: [AuthGuardService]},
  { path: 'throughputplancd1', component: ThroughputPlanCD1Component  , canActivate: [AuthGuardService]},
  { path: 'throughputrecordcd1', component: ThroughputRecordCD1Component  , canActivate: [AuthGuardService]},
  { path: 'fuelyearly', component: FuelYearlyComponent  , canActivate: [AuthGuardService]},
  { path: 'fuelbudgetpermonth', component: FuelBudgetPerMonthComponent  , canActivate: [AuthGuardService]},
  { path: 'fuelpubliccar', component: FuelPublicCarComponent  , canActivate: [AuthGuardService]},
  { path: 'fuelsparatebyplant', component: FuelSparateByPlantComponent  , canActivate: [AuthGuardService]},
  { path: 'fuelb4purchase', component: FuelB4PurchaseComponent  , canActivate: [AuthGuardService]},
  { path: 'fuelcd1purchase', component: FuelCD1PurchaseComponent  , canActivate: [AuthGuardService]},
  { path: '', pathMatch: 'full', redirectTo: '/dashboard'  },
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
