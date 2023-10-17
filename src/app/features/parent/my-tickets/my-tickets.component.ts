import {Component, OnInit} from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';
import * as moment from 'moment';
import {UserService} from "../../../core/service/user.service";
import {MyTicket} from "../../../core/model/my-ticket.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {

  tickets: MyTicket[];

  constructor(public responsive: ResponsiveService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getMyTickets().subscribe( data => {
        this.tickets = data;
    });
  }

  openTicketDetails(id: number) {
    this.router.navigate(['/ticket', id]);
  }

  getTicketDayAndTime(ticket: MyTicket) {
    return moment(ticket.eventDateTime).format("ddd h:mmA")
  }

  getTicketDate(ticket: MyTicket) {
    return moment(ticket.eventDateTime).format("MMMM Do YYYY")
  }

  getTicketDateTimePhone(ticket: MyTicket) {
    return moment(ticket.eventDateTime).format("h:mmA Do MMMM YYYY")
  }

}
