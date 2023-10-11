import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LandingComponent } from '../landing/landing.component';
import { EventService } from '../../../core/service/event.service';
import { Event } from '../../../core/model/event.model';
import { AuthUtils } from '../../../core/Utils/auth.utils';
import { Router } from '@angular/router';
import {CacheConstants} from "../../../core/constant/cache.constant";

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
        sessionStorage.setItem(CacheConstants.currentEventDialog, this.eventId.toString());
        this.eventService.getEvent(this.eventId).subscribe((event: Event) => {
            this.event = event;
        });
    }

    buyTicket() {
      this.closeDialog()
      sessionStorage.removeItem(CacheConstants.currentEventDialog)
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

    closeDialog() {
        this.dialogRef.close();
  }
}
