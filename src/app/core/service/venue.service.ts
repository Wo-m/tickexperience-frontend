import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VenueDetails} from "../model/venue-details.model";
import { environment } from "../../../environments/environment.development";
import {VenueComponent} from "../../features/parent/venue/venue.component";

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private base_url: string = `${environment.backendBaseUrl}/authed`
  private fakeVenue: VenueDetails = {
    id: 0,
    name: "Suncorp Stadium",
    location: "Suncorp Stadium"
  }

  constructor(private http: HttpClient) {}

  getVenueDetails (venueId: number) {
    // return this.http.get<VenueDetails>(this.base_url + `/venue-details/${venueId}`);
    return this.fakeVenue;
  }

  getMapIframeLink(location: string) {
    return `${environment.googleMapsBaseUrl}?q=${location}&key=${environment.googleMapsApiKey}`
  }
}
