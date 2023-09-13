import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/log-in/login.component';
import { ParentComponent } from './features/parent/parent.component';
import {TicketDetailsComponent} from "./features/parent/ticket-details/ticket-details.component";
import { RegisterComponent } from './features/log-in/register/register.component';

const routes: Routes = [
  { path: 'log-in/:loggedOut', component: LoginComponent },
  { path: 'ticket/:id', component: TicketDetailsComponent},
  { path: 'register', component: RegisterComponent },
  { path: '', component: ParentComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
