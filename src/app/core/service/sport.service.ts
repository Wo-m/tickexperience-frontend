import { HttpClient } from '@angular/common/http';

export class SportService {

  private base_url: string = "http://127.0.0.1:8080/api/sport";

  constructor(private http: HttpClient) { }

  getAllSports() {
    return this.http.get(this.base_url + "/all")
  }

  getSportAllEvents(sportId: number) {
    return this.http.get(this.base_url + `/events/${sportId}`)
  }
}
