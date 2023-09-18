import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VenueDetails } from "../model/venue-details.model";
import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private base_url: string = `${environment.backendBaseUrl}`

  constructor(private http: HttpClient) {}

  getVenueDetails (venueId: number) {
    return this.http.get<VenueDetails>(this.base_url + `/venue-details/${venueId}`);
  }

  getMapIframeLink(location: string) {
    const encodedLocation = encodeURIComponent(location);
    return `${environment.googleMapsBaseUrl}?q=${encodedLocation}&key=${environment.googleMapsApiKey}`
  }
}
