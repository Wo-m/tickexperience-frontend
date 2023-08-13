import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../model/token.model';
import { Login } from '../model/login.model';

/**
 * Singleton Service for handling authentication
 * should only be injected to use the non-static methods
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static token: string = "";
  private base_url: string = "http://127.0.0.1:8080/api/auth/";

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    let body = new Login(username, password);

    this.http.post(this.base_url + "login", body)
      .subscribe((data: Token) =>
        AuthService.token = data.token!);
  }

  // Static Methods to avoid injection
  static logout() {
    this.token = '';
  }

  static getToken(): string {
    return this.token;
  }

  static isAuthenticated(): boolean {
    return this.token != "";
  }

}
