import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../../core/service/responsive.service';
import { SportService } from '../../../core/service/sport.service';
import { Sport } from '../../../core/model/sport.model';
import { Event } from '../../../core/model/event.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventDetailsComponent } from '../event-details/event-details.component';

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

      this.events = [];
    })
  }

  selectSport(selectedSport: any) {
    if (selectedSport.id == 0) { // all sports
      for (const sport of this.sports) {
        if (sport.id == 0)
          continue

        this.sportService.getEvents(sport.id).subscribe((data: Event[]) => {
          data.forEach(event => {
            this.events.push(event);
          });
        });
      }
    } else { // specific sport
      this.sportService.getEvents(selectedSport.id).subscribe((data: Event[]) => {
        this.events = data;
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
