import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GoogleMapComponent} from "../google-map/google-map.component";
import {ActivatedRoute} from "@angular/router";
import {VenueService} from "../../../core/service/venue.service";
import {Venue} from "../../../core/model/venue-details.model";

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  venueId: number;
  venueDetails: Venue;

  imageUrls: string[];
  currentImageIndex: number = 0;

  constructor(private venueService: VenueService,
              public dialog: MatDialog,
              private route: ActivatedRoute) { }

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
    this.dialog.open(GoogleMapComponent, {
      width: '70%',
      height: '85%',
      data: {
        location: this.venueDetails.location
      }
    });
  }

  getCurrentImageURL(): string {
    return this.imageUrls[this.currentImageIndex];
  }

  scroll(direction: number): void {
    this.currentImageIndex = (this.currentImageIndex + direction) % this.imageUrls.length;
  }

}
