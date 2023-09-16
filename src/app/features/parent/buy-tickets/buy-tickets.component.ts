import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../../../core/service/event.service';
import { Ticket } from '../../../core/model/ticket.model';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.scss']
})
export class BuyTicketsComponent implements OnInit {

  @Input()
  eventId: number;

  tickets: Ticket[];

  selectedTicketIds: number[] = [];

  constructor(private eventService: EventService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.eventService.getTickets(this.eventId).subscribe(data => {
      this.tickets = data;
    });
  }

  buyTicket(ticketId: number) {
    this.userService.buyTicket(ticketId).subscribe();
  }

  buyTickets() {
    this.selectedTicketIds.forEach(id => {
      this.buyTicket(id);
    });
  }
}
