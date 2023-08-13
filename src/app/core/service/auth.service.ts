import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../model/token.model';
import { Login } from '../model/login.model';

/**
 * Singleton Service for handling authentication
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = "";
  private base_url: string = "http://127.0.0.1:8080/api/auth/";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    let body = new Login(username, password);

    this.http.post(this.base_url + "login", body)
      .subscribe( (data: Token) =>
        this.token = data.token!);
  }

  checkToken() {
    if (this.token.length == 0) {
      return;
    }
    const params = new HttpParams().set('token', this.token);

    return this.http.get(this.base_url + "check", {params: params}).subscribe();
  }
}
