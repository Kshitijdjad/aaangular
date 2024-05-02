// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/login.guard';




const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate:[loginGuard] }, // Default route to DashboardComponent
  { path:'payment', component: PaymentComponent ,canActivate:[loginGuard]},
  { path:'login', component: LoginComponent },
  //{ path: '**', redirectTo: 'home',canActivate:[loginGuard] },
  { path: '**', redirectTo: 'login' } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
