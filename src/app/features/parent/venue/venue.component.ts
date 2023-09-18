import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GoogleMapComponent} from "../google-map/google-map.component";
import {ActivatedRoute} from "@angular/router";
import {VenueService} from "../../../core/service/venue.service";
import {VenueDetails} from "../../../core/model/venue-details.model";

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss']
})
export class VenueComponent implements OnInit {

  place_holder_image: string = "assets/icons/swimming.png"
  venueId: number;
  venueDetails: VenueDetails;

  constructor(private venueService: VenueService,
              public dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.venueId = params['venue_id'];

      this.venueService.getVenueDetails(this.venueId).subscribe(data => {
        this.venueDetails = data;
      });
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
}
