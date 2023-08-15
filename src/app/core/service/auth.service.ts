import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../model/token.model';
import { Login } from '../model/login.model';
import { CacheConstants } from '../constant/cache.constant';
import { AuthUtils } from '../Utils/auth.utils';

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
    if (AuthUtils.isAuthenticated()) {
      console.log("Login failed: User already logged in.")
      console.log(AuthUtils.getToken())
      return;
    }

    let body = new Login(username, password);

    this.http.post(this.base_url + "login", body)
      .subscribe((data: Token) =>
        // store token in browser session storage
        sessionStorage.setItem(CacheConstants.token, data.token!));
  }

  logout() {
    if (!AuthUtils.isAuthenticated()) {
      console.log("Logout failed: No User logged in.")
      return;
    }

    const token = AuthUtils.getToken();
    sessionStorage.removeItem(CacheConstants.token);

    let body = {"token": token};
    this.http.post(this.base_url + "logout", body).subscribe();
  }

}
