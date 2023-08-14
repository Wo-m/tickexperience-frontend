import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthUtils } from '../Utils/auth.utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private base_url: string = "http://127.0.0.1:8080/api/authed/user";
  constructor(private http: HttpClient) { }

  getTickets() {
    const headers = new HttpHeaders().set('token', AuthUtils.getToken());
    return this.http.get(this.base_url + "/tickets", {headers: headers});
  }
}
