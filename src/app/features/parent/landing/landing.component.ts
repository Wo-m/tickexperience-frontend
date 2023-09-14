import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';
import { SportService } from '../../../core/service/sport.service';
import { Sport } from '../../../core/model/sport.model';
import { Event } from '../../../core/model/event.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  sports: Sport[];
  events: Event[];

  constructor(public responsive: ResponsiveService,
              private sportService: SportService) {
  }

  ngOnInit(): void {
    this.sportService.getAllSports().subscribe((data: Sport[]) => {
      this.sports = data;
      this.selectSport(this.sports[0]);
    })
  }

  selectSport(sport: any) {
    this.sportService.getEvents(sport.id).subscribe((data: Event[]) => {
      this.events = data;
      console.log(this.events[0].gender)
    });
  }

  getStartDate(event: Event) {
    return new Date(event.startTime).toLocaleDateString()
  }

  getStartTime(event: Event) {
    return new Date(event.startTime).toLocaleTimeString();
  }

  getGender(event: Event) {
    if (event.gender === "M") {
      return "Male"
    }
    if (event.gender === "F") {
      return "Female"
    }
    return "Mixed"
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
