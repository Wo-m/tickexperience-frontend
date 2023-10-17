import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {VenueService} from "../../../core/service/venue.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {ResponsiveService} from "../../../core/service/responsive.service";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit{
  public iframeLink: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<GoogleMapComponent>,
    private venueService: VenueService,
    private sanitizer: DomSanitizer,
    public responsive: ResponsiveService
  ) {}

  ngOnInit(): void {
    const rawIframeLink = this.venueService.getMapIframeLink(this.data.location);
    this.iframeLink = this.sanitizer.bypassSecurityTrustResourceUrl(rawIframeLink);
    console.log(this.iframeLink);
  }

  closePopup(): void {
    this.dialogRef.close();
  }
}

