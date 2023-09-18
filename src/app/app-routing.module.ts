import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/log-in/login.component';
import { ParentComponent } from './features/parent/parent.component';
import { RegisterComponent } from './features/log-in/register/register.component';
import { LandingComponent } from './features/parent/landing/landing.component';
import { MyTicketsComponent } from './features/parent/my-tickets/my-tickets.component';
import { MyAccountComponent } from './features/parent/my-account/my-account.component';
import {VenueComponent} from "./features/parent/venue/venue.component";

const routes: Routes = [
  { path: 'log-in/:loggedOut', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: ParentComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: LandingComponent },
      { path: 'my-tickets', component: MyTicketsComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'venue/:venue_id', component: VenueComponent}
    ]},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
