import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private base_url: string = "http://127.0.0.1:8080/api/auth/";
  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')


    this.http.post(this.base_url + "login", body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
      .subscribe( data => {
        console.log(data)
    });
  }

  checkToken(token: string) {
    const params = new HttpParams().set('token', token);

    return this.http.get(this.base_url + "check", {params: params})
  }
}
