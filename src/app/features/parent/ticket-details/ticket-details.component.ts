import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResponsiveService } from '../../../core/service/responsive.service';
import { MyTicket } from '../../../core/model/my-ticket.model';
import { TicketService } from '../../../core/service/ticket.service';
import * as moment from 'moment/moment';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-ticket-details',
    templateUrl: './ticket-details.component.html',
    styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

    ticketId: number;
    ticket: MyTicket;
    countdownTime: number[] = [0, 0, 0, 0, 0, 0]; //[years, months, days, hours, minutes, seconds]

    constructor(private route: ActivatedRoute,
                public responsive: ResponsiveService,
                private ticketService: TicketService,
                private domSanitiser: DomSanitizer,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.ticketId = Number(params.get('id'));

            this.ticketService.getTicket(this.ticketId).subscribe(data => {
                this.ticket = data;

                let safeUrls: string[] = [];
                data.videoUrls.forEach((element: string) => {
                  safeUrls.push(this.domSanitiser.bypassSecurityTrustResourceUrl(element) as string)
                });

                this.ticket.videoUrls = safeUrls;
                console.log(data.videoUrls)
                this.setTimeToEvent();
            });
        });

      setInterval(() => {
        this.setTimeToEvent();
      }, 1000);
    }

    back() {
        this.router.navigate(['/my-tickets']);
    }

  setTimeToEvent(): void {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the countdown date
      let distance = new Date(this.ticket.eventDateTime).getTime() - now;

      // Time calculations for years, months, days, hours, minutes, and seconds
      let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
      let yearsDif = distance - years * (1000 * 60 * 60 * 24 * 365);

      let months = Math.floor(yearsDif / (1000 * 60 * 60 * 24 * 30.44)); // Approximate number of days in a month
      let monthsDif = yearsDif - months * (1000 * 60 * 60 * 24 * 30.44);

      let days = Math.floor(monthsDif / (1000 * 60 * 60 * 24));
      let daysDif = monthsDif - days * (1000 * 60 * 60 * 24);

      let hours = Math.floor(daysDif / (1000 * 60 * 60));
      let hoursDif = daysDif - hours * (1000 * 60 * 60);

      let minutes = Math.floor(hoursDif / (1000 * 60));
      let minutesDif = hoursDif - minutes * (1000 * 60);

      let seconds = Math.floor(minutesDif / 1000);

      this.countdownTime = [
        years,
        months,
        days,
        hours,
        minutes,
        seconds
      ];
    }


    getTicketDayAndTime(ticket: MyTicket) {
        return moment(ticket.eventDateTime).format("ddd h:mmA")
    }

    getTicketDate(ticket: MyTicket) {
        return moment(ticket.eventDateTime).format("MMMM Do YYYY")
    }
}
