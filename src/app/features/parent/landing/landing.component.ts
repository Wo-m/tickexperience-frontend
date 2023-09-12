import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  // sports: string[] = ['Running', 'Swimming', 'Rugby']
  sports = [
    {name: "Running",
      icon: "athletics",
      events: [
          {name: "100m", gender: "male", date: new Date(2032, 6, 23), time: "12:00", venue: "Gabba",
            image: ""},
          {name: "10,000m", gender: "female", date: new Date(2032, 6, 27), time: "16:00", venue: "SCG",
            image: ""}
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

  constructor(public responsive: ResponsiveService) {
  }

  ngOnInit(): void {
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

  getCols() {
    if (this.responsive.isPhone()){
      return "1"
    }
    return "3"
  }
}
