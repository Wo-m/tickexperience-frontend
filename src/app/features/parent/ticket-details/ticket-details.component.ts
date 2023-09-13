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
                                        venue: "Gabba",
                                        event: "Cricket",
                                        date: new Date("2032-05-27T11:30")}
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
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let months = Math.floor(distance/(1000 * 60 * 60 * 24 * 7));
      let years = Math.floor(distance/(1000 * 60 * 60 * 24 * 7));

      this.countdownTime = [years, months, days];
  }

}
