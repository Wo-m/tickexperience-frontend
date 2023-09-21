import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Ticket } from '../model/ticket.model';
import { MyTicket } from '../model/my-ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private base_url: string = `${environment.backendBaseUrl}`+'/ticket'

  constructor(private http: HttpClient) { }


  getTicket (ticketId: number) {
    return this.http.get<MyTicket>(this.base_url + `/${ticketId}`);
  }
}
