import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/service/user.service';
import { Ticket } from '../../core/model/ticket.model';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  tickets: Ticket[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    if (AuthService.isAuthenticated()) {
      this.loadUserTickets();
    }
  }

  loadUserTickets() {
    this.userService.getTickets().subscribe((data: any) => {
      this.tickets = data as Ticket[];
    });
  }
}
