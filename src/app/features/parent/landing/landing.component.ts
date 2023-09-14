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

  // TODO: Remove this mock data
  // sports = [
  //   {name: "Running",
  //     icon: "athletics",
  //     events: [
  //         {name: "100m", gender: "male", date: new Date(2032, 6, 23), time: "12:00", venue: "Gabba",
  //           image: ""},
  //         {name: "10,000m", gender: "female", date: new Date(2032, 6, 27), time: "16:00", venue: "SCG",
  //           image: ""}
  //       ]
  //   },
  //   {name: "Swimming",
  //     icon: "swimming",
  //     events: [
  //       {name: "400m Freestyle", gender: "male", date: new Date(2032, 6, 23), time: "12:00", venue: "Gabba",
  //         image: ""}
  //     ]
  //   },
  //   {name: "Football",
  //     icon: "football",
  //     events: [
  //       {name: "100m", gender: "male", date: new Date(2032, 6, 23), time: "12:00", venue: "Gabba",
  //         image: ""},
  //       {name: "10,000m", gender: "female", date: new Date(2032, 6, 27), time: "16:00", venue: "SCG",
  //         image: ""}
  //     ]
  //   },
  // ]

  sports: Sport[];

  events: Event[];

  constructor(public responsive: ResponsiveService,
              private sportService: SportService,
              private dialog: MatDialog) {
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
    });
  }

  openEventDetails(event: Event) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = "30%";
    dialogConfig.width = "30%";
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
