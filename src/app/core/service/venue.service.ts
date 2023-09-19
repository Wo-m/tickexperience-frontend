import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venue } from "../model/venue-details.model";
import { environment } from "../../../environments/environment.development";
import { Section } from '../model/section.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private base_url: string = `${environment.backendBaseUrl}`+'/venue'

  constructor(private http: HttpClient) {}

  getVenue (venueId: number) {
    return this.http.get<Venue>(this.base_url + `/${venueId}`);
  }

  getSections(venueId: number) {
    return this.http.get<Section[]>(this.base_url + `/${venueId}/sections`);
  }

  getMapIframeLink(location: string) {
    const encodedLocation = encodeURIComponent(location);
    return `${environment.googleMapsBaseUrl}?q=${encodedLocation}&key=${environment.googleMapsApiKey}`
  }
}
