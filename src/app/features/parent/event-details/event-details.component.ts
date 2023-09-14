import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LandingComponent } from '../landing/landing.component';

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

    eventId: number

    constructor(public dialogRef: MatDialogRef<LandingComponent>) {
    }


    ngOnInit(): void {
    }

}
