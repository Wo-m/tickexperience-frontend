import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyTicket } from '../model/my-ticket.model';
import {MyAccountDetails} from "../model/my-account.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url: string = "http://127.0.0.1:8080/api/authed/user";
  constructor(private http: HttpClient) { }

  getMyTickets() {
    return this.http.get<MyTicket[]>(this.base_url + "/my-tickets");
  }

  getMyAccountDetails() {
    return this.http.get<MyAccountDetails>(this.base_url + "/my-acc-details");
  }
}
