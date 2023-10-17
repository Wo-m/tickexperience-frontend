import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyTicket } from '../model/my-ticket.model';
import {MyAccountDetails} from "../model/my-account.model";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url: string = `${environment.backendBaseUrl}` + '/authed/user'
  constructor(private http: HttpClient) { }

  getMyTickets() {
    return this.http.get<MyTicket[]>(this.base_url + "/my-tickets");
  }

  getMyAccountDetails() {
    return this.http.get<MyAccountDetails>(this.base_url + "/details");
  }

  buyTicket(ticketId: number) {
    return this.http.post(this.base_url + `/buy-ticket/${ticketId}`, null);
  }
}
