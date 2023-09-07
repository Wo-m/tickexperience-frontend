import {Component, OnInit} from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';
import * as moment from 'moment';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {

  //TODO: delete this dummy data, set up a proper fetch, might have to alter below functions for new format
  tickets = [
    {id: 0, datetime: "2023-07-20 20:00:00.000", venue: "The Gabba", event: "Opening Ceremony"},
    {id: 0, datetime: "2023-07-27 08:00:00.000", venue: "Roma St Stadium", event: "400m Mixed Medley Finals"},
    {id: 0, datetime: "2023-08-01 18:00:00.000", venue: "The Gabba", event: "100m Sprint Finals"},
    {id: 0, datetime: "2023-08-04 21:00:00.000", venue: "Lang Park Stadium", event: "Women's Rugby 7s Finals"},
    {id: 0, datetime: "2023-08-07 20:00:00.000", venue: "The Gabba ", event: "Closing Ceremony"}
  ]

  constructor(public responsive: ResponsiveService) {
  }

  ngOnInit(): void {

  }

  //TODO: implement functionality
  openTicketDetails(id: number) {
    console.log("todo")
  }

  getTicketDayAndTime(ticket: object) {
    // @ts-ignore
    return moment(ticket.datetime).format("ddd h:mmA")
  }

  getTicketDate(ticket: object) {
    // @ts-ignore
    return moment(ticket.datetime).format("MMMM Do YYYY")
  }

  getTicketDateTimePhone(ticket: object) {
    // @ts-ignore
    return moment(ticket.datetime).format("h:mmA Do MMMM YYYY")
  }

}
