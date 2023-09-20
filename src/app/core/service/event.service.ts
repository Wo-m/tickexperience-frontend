import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../model/event.model';
import { Ticket } from '../model/ticket.model';

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private base_url: string = 'http://127.0.0.1:8080/api/event';

    constructor(private http: HttpClient) {
    }

    getEvent(eventId: number) {
        return this.http.get<Event>(this.base_url + `/${eventId}`);
    }

    getTickets(eventId: number) {
        return this.http.get<Ticket[]>(this.base_url + `/tickets/${eventId}`);
    }
}
