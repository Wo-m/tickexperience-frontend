import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/log-in/login.component';
import { LandingComponent } from './features/landing/landing.component';

const routes: Routes = [
  { path: 'log-in', component: LoginComponent },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
