import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/service/user.service';
import { Ticket } from '../../../core/model/ticket.model';
import { AuthUtils } from '../../../core/Utils/auth.utils';
import { SportService } from '../../../core/service/sport.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  tickets: Ticket[];
  // sports: string[] = ['Running', 'Swimming', 'Rugby']
  sports = [
    {name: "Running", dates: [1, 2,3, 4, 5]},
    {name: "Swimming", dates: [1, 2,3, 4, 5]},
    {name: "Rugby", dates: [1, 2,3, 4, 5]}
  ]
  selectedSport: {name: string, dates: number[]} = this.sports[0]

  constructor(private userService: UserService,
              private sportService: SportService) {
  }

  ngOnInit(): void {
    if (AuthUtils.isAuthenticated()) {
      this.loadUserTickets();
    }
  }

  selectSport(sport: { name: string; dates: number[];}) {
    this.selectedSport = sport;
  }

  scrollLeft(id: string) {
    this.scrollNav(-100, id)
  }

  scrollRight(id: string) {
    this.scrollNav(100, id)
  }

  scrollNav(left: number, id: string) {
    const nav = document.getElementById(id)
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
