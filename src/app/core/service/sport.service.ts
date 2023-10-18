import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sport } from '../model/sport.model';
import { Event } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private base_url: string = "http://127.0.0.1:8080/api/sport";
  constructor(private http: HttpClient) { }

  getAllSports() {
    return this.http.get<Sport[]>(this.base_url + "/all")
  }

  getEvents(sportId: number) {
    return this.http.get<Event[]>(this.base_url + `/events/${sportId}`)
  }

  getVideoUrls(sportId: number) {
    return this.http.get<string[]>(this.base_url + `/video/${sportId}`)
  }
}
