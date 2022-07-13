import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlApiAzure } from 'src/app/shared/routes/RoutesApiAzure';

@Injectable({
  providedIn: 'root',
})
export class BannersServices {
  constructor(private http: HttpClient) {}

  //GET BANNERS USERS
  getBannersUSers(variable: string, movil: string): Observable<any> {
    return this.http.get<any>(
      ` ${urlApiAzure.UrlApi}${urlApiAzure.bannersIndex}${variable}${movil}`
    );
  }
}
