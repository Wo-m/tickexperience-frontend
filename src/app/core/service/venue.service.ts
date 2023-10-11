import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from "../model/venue-details.model";
import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private base_url: string = `${environment.backendBaseUrl}`+'/venue'

  constructor(private http: HttpClient) {}

  getVenue (venueId: number) {
    return this.http.get<Venue>(this.base_url + `/${venueId}`);
  }

  getVenueImages (venueId: number) {
    return this.http.get<string[]>(this.base_url + `/images/${venueId}`)
  }

  getMapIframeLink(location: string) {
    const encodedLocation = encodeURIComponent(location);
    return `${environment.googleMapsBaseUrl}?q=${encodedLocation}&key=${environment.googleMapsApiKey}`
  }
}
