import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './features/log-in/login.component';
import { ParentComponent } from './features/parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './features/parent/landing/landing.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppInterceptor } from './core/interceptor/app.interceptor';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MyTicketsComponent } from './features/parent/my-tickets/my-tickets.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { RegisterComponent } from './features/log-in/register/register.component';
import { MyAccountComponent } from './features/parent/my-account/my-account.component';
import { EventDetailsComponent } from './features/parent/event-details/event-details.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VrImageComponent } from './features/vr-image/vr-image.component';
import { BuyTicketsComponent } from './features/parent/buy-tickets/buy-tickets.component';
import { MatSelectModule } from '@angular/material/select';
import { VenueComponent } from './features/parent/venue/venue.component';
import { GoogleMapComponent } from './features/parent/google-map/google-map.component';
import { TicketDetailsComponent } from './features/parent/ticket-details/ticket-details.component';
import { WelcomeComponent } from './features/parent/welcome/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ParentComponent,
        LandingComponent,
        MyTicketsComponent,
        RegisterComponent,
        MyAccountComponent,
        VrImageComponent,
        EventDetailsComponent,
        BuyTicketsComponent,
        VenueComponent,
        GoogleMapComponent,
        TicketDetailsComponent,
        WelcomeComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatGridListModule,
    NgOptimizedImage,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule
  ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AppInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
