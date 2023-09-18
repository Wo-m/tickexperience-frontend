import {Component, OnInit} from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';
import * as moment from 'moment';
import {UserService} from "../../../core/service/user.service";
import {MyTicket} from "../../../core/model/my-ticket.model";

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {

  tickets: MyTicket[];

  constructor(public responsive: ResponsiveService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getMyTickets().subscribe( data => {
        this.tickets = data;
    });
  }

  //TODO: implement functionality
  openTicketDetails(id: number) {
    console.log("todo");
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
