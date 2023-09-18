import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../../../core/service/event.service';
import { Ticket } from '../../../core/model/ticket.model';
import { UserService } from '../../../core/service/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResponsiveService } from '../../../core/service/responsive.service';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.scss']
})
export class BuyTicketsComponent implements OnInit {

  eventId: number;

  tickets: Ticket[];

  selectedTicket: Ticket;


  constructor(private eventService: EventService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              public responsive: ResponsiveService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.eventId = Number(params.get('eventId'));

      // ew
      this.eventService.getTickets(this.eventId).subscribe(data => {
        this.tickets = data;
        console.log(this.tickets)
      });
    });

  }

  buyTicket() {
    this.userService.buyTicket(this.selectedTicket.id).subscribe();
    this.router.navigate(['/my-tickets'])
  }
}
