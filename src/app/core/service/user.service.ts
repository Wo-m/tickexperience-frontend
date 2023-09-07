import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url: string = "http://127.0.0.1:8080/api/authed/user";
  constructor(private http: HttpClient) { }

  getMyTickets() {
    return this.http.get(this.base_url + "/my-tickets");
  }
}
