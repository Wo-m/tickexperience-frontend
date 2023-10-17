import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GoogleMapComponent} from "../google-map/google-map.component";
import {ActivatedRoute} from "@angular/router";
import {VenueService} from "../../../core/service/venue.service";
import {Venue} from "../../../core/model/venue-details.model";
import {ResponsiveService} from "../../../core/service/responsive.service";

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  venueId: number;
  venueDetails: Venue;

  imageUrls: string[];
  currentIndex: number = 0;

  constructor(private venueService: VenueService,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              public responsive: ResponsiveService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.venueId = params['venueId'];

      // get venue details
      this.venueService.getVenue(this.venueId).subscribe(data => {
        this.venueDetails = data;
      });

      // get venue images
      this.venueService.getVenueImages(this.venueId).subscribe(data => {
        this.imageUrls = data;
      })
    })
  }

  openMapsPopup(): void {
    const isPhone = this.responsive.isPhone();
    const width = isPhone ? '100%' : '70%';
    const height = isPhone ? '80%' : '85%';

    this.dialog.open(GoogleMapComponent, {
      width: width,
      height: height,
      data: {
        location: this.venueDetails.location
      }
    });
  }

  scroll(direction: number): void {
    this.currentIndex += direction;

    // Wrap around when reaching the end or beginning of the gallery
    if (this.currentIndex >= this.imageUrls.length) {
      this.currentIndex = 0;
    } else if (this.currentIndex < 0) {
      this.currentIndex = this.imageUrls.length - 1;
    }
  }

}
