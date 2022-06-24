import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannersServices {
  private url =
    'https://puertto-webapp.azurewebsites.net/puertto/general/bannerindex?';
  constructor(private http: HttpClient) {}

  //GET BANNERS USERS
  getBannersUSers(variable:string): Observable<any> {
    return this.http.get<any>(`${this.url}${variable}`);
  }
}
