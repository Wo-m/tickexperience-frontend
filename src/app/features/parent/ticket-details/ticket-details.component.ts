import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthService} from "../../../core/service/auth.service";
import {ResponsiveService} from "../../../core/service/responsive.service";
import {MyTicket} from '../../../core/model/my-ticket.model';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  ticketId: string | null;
  ticket = {userId: 1,
                                        ticketId: 2,
                                        seatNumber: 101,
                                        venue: "Chandler",
                                        event: "Swimming",
                                        date: new Date("2032-11-19T11:30")}
  countdownTime: number[] = [0,0, 0]; //[years, months, days]

  constructor(private route: ActivatedRoute,
              private router: Router,
              public responsive: ResponsiveService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.ticketId = params.get('id');
    this.setTimeToEvent();
    });
  }

  setTimeToEvent(): void {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the countdown date
      let distance = this.ticket.date.getTime() - now;

      // Time calculations for days, hours, minutes and seconds
      let years = Math.floor(distance/(1000 * 60 * 60 * 24 * 365));
      let yearsDif = distance - (years * 1000 * 60 * 60 * 24 * 365);
      let months = Math.floor(12 * (yearsDif /(1000 * 60 * 60 * 24 * 365)));
      let monthsDif = yearsDif - (months / 12 * (1000 * 60 * 60 * 24 * 365));
      let days = Math.floor(monthsDif / (1000 * 60 * 60 * 24));


      this.countdownTime = [years, months, days];
  }

}
