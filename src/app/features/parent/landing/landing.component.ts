import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';
import { SportService } from '../../../core/service/sport.service';
import { Sport } from '../../../core/model/sport.model';
import { Event } from '../../../core/model/event.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventDetailsComponent } from '../event-details/event-details.component';
import {forkJoin} from "rxjs";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  sports: Sport[];
  events: Event[];

  constructor(public responsive: ResponsiveService,
              private sportService: SportService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.sportService.getAllSports().subscribe((data: Sport[]) => {
      this.sports = data;

      // 'all sports' option
      const allSport = new Sport();
      allSport.id = 0;
      allSport.name = "all";
      allSport.icon = "all";
      this.sports.unshift(allSport)
      this.selectSport(this.sports[0]);
    })
  }

  selectSport(selectedSport: any) {
    this.events = [];

    const fetchEventsAndSort = (data: Event[]) => {
      this.events = data;

      // Sort dates chronologically
      this.events.sort((a, b) => {
        if (a.startTime < b.startTime) {
          return -1;
        } else if (a.startTime > b.startTime) {
          return 1;
        } else {
          return 0;
        }
      });
    };

    if (selectedSport.id == 0) { // all sports
      const observables = this.sports
        .filter(sport => sport.id !== 0)
        .map(sport => this.sportService.getEvents(sport.id));

      // wait for all to arrive before we process
      forkJoin(observables).subscribe((results: Event[][]) => {
        const allEvents = results.reduce((acc, curr) => acc.concat(curr), []);
        fetchEventsAndSort(allEvents);
      });
    } else { // specific sport
      this.sportService.getEvents(selectedSport.id).subscribe((data: Event[]) => {
        fetchEventsAndSort(data);
      });
    }
  }

  openEventDetails(event: Event) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = "50%";
    dialogConfig.width = "50%";
    dialogConfig.viewContainerRef = undefined;

    let dialogRef = this.dialog.open(EventDetailsComponent, dialogConfig);
    dialogRef.componentInstance.eventId = event.id;
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
