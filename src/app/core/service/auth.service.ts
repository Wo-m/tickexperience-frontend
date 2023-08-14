import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../model/token.model';
import { Login } from '../model/login.model';
import { CacheConstants } from '../constant/cache.constant';

/**
 * Singleton Service for handling authentication
 * should only be injected to use the non-static methods
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url: string = "http://127.0.0.1:8080/api/auth/";

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    let body = new Login(username, password);

    this.http.post(this.base_url + "login", body)
      .subscribe((data: Token) =>
        // store token in browser session storage
        sessionStorage.setItem(CacheConstants.token, data.token!));
  }

  logout() {
    let body = {"token": AuthService.getToken()};

    sessionStorage.removeItem(CacheConstants.token);
    this.http.post(this.base_url + "logout", body).subscribe();
  }

  static getToken(): string {
    return sessionStorage.getItem(CacheConstants.token)!;
  }

  static isAuthenticated(): boolean {
    return sessionStorage.getItem(CacheConstants.token) != '';
  }

}
