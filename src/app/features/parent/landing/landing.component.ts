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
    {name: "Running",
      icon: "athletics",
      events: [
          {name: "100m", gender: "male", date: new Date(2032, 6, 23), time: "12:00", venue: "Gabba", image: "https://athleticsweekly.com/wp-content/uploads/2015/03/BOLTUSAIN_Beijing08.jpg"},
          {name: "10,000m", gender: "female", date: new Date(2032, 6, 27), time: "16:00", venue: "SCG", image: "https://www.si.com/.image/t_share/MTY4MTI1ODk2OTk3MjgzMDg5/huddle-ayana-rio-216jpg.jpg"},
        ]
    },
    {name: "Swimming",
      icon: "swimming",
      events: [
      ]},
    {name: "Football",
      icon: "football",
      events: [
      ]}
  ]

  selectedSport = this.sports[0]

  constructor(private userService: UserService,
              private sportService: SportService) {
  }

  ngOnInit(): void {
    if (AuthUtils.isAuthenticated()) {
      this.loadUserTickets();
    }
  }

  selectSport(sport: any) {
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
