import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LandingComponent } from '../landing/landing.component';
import { EventService } from '../../../core/service/event.service';
import { Event } from '../../../core/model/event.model';
import { AuthUtils } from '../../../core/Utils/auth.utils';
import { Router } from '@angular/router';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

    eventId: number

    event: Event

    constructor(public dialogRef: MatDialogRef<LandingComponent>,
                private eventService: EventService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.eventService.getEvent(this.eventId).subscribe((event: Event) => {
            this.event = event;
        });
    }

    buyTicket() {
      this.dialogRef.close()
      this.router.navigate(['/buy-ticket', `${this.eventId}`]);
    }

    getStartDate(event: Event) {
        return new Date(event.startTime).toLocaleDateString()
    }

    getStartTime(event: Event) {
        return new Date(event.startTime).toLocaleTimeString();
    }

    isAuthenticated() {
        return AuthUtils.isAuthenticated();
    }
}
