import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import { Ticket } from '../../../core/model/ticket.model';
import { AuthUtils } from '../../../core/Utils/auth.utils';
import { SportService } from '../../../core/service/sport.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  tickets: Ticket[];
  sports: string[] = ['Running', 'Swimming', 'Rugby']

  constructor(private userService: UserService,
              private sportService: SportService) {
  }

  ngOnInit(): void {
    if (AuthUtils.isAuthenticated()) {
      this.loadUserTickets();
    }
  }

  scrollLeft() {
    this.scrollNav(-100)
  }

  scrollRight() {
    this.scrollNav(100)
  }

  scrollNav(left: number) {
    const nav = document.getElementById('nav')
    if (nav === null) {
      return;
    }
    nav.scrollBy({left: left, behavior: 'smooth'})
  }

  loadUserTickets() {
    this.userService.getTickets().subscribe((data: any) => {
      this.tickets = data as Ticket[];
    });
  }
}
