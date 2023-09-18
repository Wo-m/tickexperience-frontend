import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {VenueService} from "../../../core/service/venue.service";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit{
  private iframeLink: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<GoogleMapComponent>,
    private venueService: VenueService,
  ) {}

  ngOnInit(): void {
    this.iframeLink = this.venueService.getMapIframeLink(this.data.location);
    console.log(this.iframeLink);
  }

  closePopup(): void {
    this.dialogRef.close();
  }
}

