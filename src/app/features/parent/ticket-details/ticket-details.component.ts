import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResponsiveService } from '../../../core/service/responsive.service';
import { MyTicket } from '../../../core/model/my-ticket.model';
import { TicketService } from '../../../core/service/ticket.service';
import * as moment from 'moment/moment';


@Component({
    selector: 'app-ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

    ticketId: number;
    ticket: MyTicket;
    countdownTime: number[] = [0, 0, 0]; //[years, months, days]

    constructor(private route: ActivatedRoute,
                public responsive: ResponsiveService,
                private ticketService: TicketService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.ticketId = Number(params.get('id'));

            this.ticketService.getTicket(this.ticketId).subscribe(data => {
                this.ticket = data;
                console.log(data);
                this.setTimeToEvent();
            });
        });


    }

    back() {
        this.router.navigate(['/my-tickets']);
    }

    setTimeToEvent(): void {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the countdown date

        let distance = new Date(this.ticket.eventDateTime).getTime() - now;

        // Time calculations for days, hours, minutes and seconds
        let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
        let yearsDif = distance - (years * 1000 * 60 * 60 * 24 * 365);
        let months = Math.floor(12 * (yearsDif / (1000 * 60 * 60 * 24 * 365)));
        let monthsDif = yearsDif - (months / 12 * (1000 * 60 * 60 * 24 * 365));
        let days = Math.floor(monthsDif / (1000 * 60 * 60 * 24));


        this.countdownTime = [years, months, days];
    }

    getTicketDayAndTime(ticket: MyTicket) {
        return moment(ticket.eventDateTime).format("ddd h:mmA")
    }

    getTicketDate(ticket: MyTicket) {
        return moment(ticket.eventDateTime).format("MMMM Do YYYY")
    }
}
