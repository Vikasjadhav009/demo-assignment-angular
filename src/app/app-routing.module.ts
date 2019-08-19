import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth'

import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch:'full'},
  { path:'home', component:LandingComponent},
  { path:'signup', component:SignupComponent},
  { path:'success', component:SuccessComponent, canActivate:[AuthGuard] },
  { path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
