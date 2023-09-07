import {Component, OnInit} from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';
import * as moment from 'moment';
import { Ticket } from '../../../core/model/ticket.model';
import {UserService} from "../../../core/service/user.service";
import {MyTicket} from "../../../core/model/my-ticket.model";

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {

  //TODO: delete this dummy data, set up a proper fetch, might have to alter below functions for new format
  // tickets: Ticket[] = [
  //   {id: 0, datetime: "2023-07-20 20:00:00.000", venue: "The Gabba", event: "Opening Ceremony"},
  //   {id: 0, datetime: "2023-07-27 08:00:00.000", venue: "Roma St Stadium", event: "400m Mixed Medley Finals"},
  //   {id: 0, datetime: "2023-08-01 18:00:00.000", venue: "The Gabba", event: "100m Sprint Finals"},
  //   {id: 0, datetime: "2023-08-04 21:00:00.000", venue: "Lang Park Stadium", event: "Women's Rugby 7s Finals"},
  //   {id: 0, datetime: "2023-08-07 20:00:00.000", venue: "The Gabba ", event: "Closing Ceremony"}
  // ]

  tickets: MyTicket[];

  constructor(public responsive: ResponsiveService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getMyTickets().subscribe( (data: any) => {
      this.tickets = data as MyTicket[];
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
