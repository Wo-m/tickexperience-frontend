import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';
import { CacheConstants } from '../constant/cache.constant';
import { AuthUtils } from '../Utils/auth.utils';
import { Token } from '../model/token.model';

/**
 * Singleton Service for handling authentication
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url: string = "http://127.0.0.1:8080/api/auth/";

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    let body: Login = {
      username: username,
      password: password
    }

    return this.http.post<Token>(this.base_url + "login", body);
  }

  logout() {
    if (!AuthUtils.isAuthenticated()) {
      console.log("Logout failed: No User logged in.")
      return;
    }

    const token = AuthUtils.getToken();
    sessionStorage.removeItem(CacheConstants.token);

    this.http.post(this.base_url + `logout/${token}`, null ).subscribe();
  }

}
