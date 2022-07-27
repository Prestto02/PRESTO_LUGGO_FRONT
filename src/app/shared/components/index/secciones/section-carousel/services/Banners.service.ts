import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlApiAzure } from 'src/app/shared/routes/RoutesApiAzure';
import { BannersModels } from '../models/BannersModels';

@Injectable({ providedIn: 'root' })
export class BannersServices {
  constructor(private http: HttpClient) {}

  //GET BANNERS USERS
  getBannersUSers(
    variable: string,
    movil: string
  ): Observable<BannersModels[]> {
    return this.http.get<BannersModels[]>(
      ` ${urlApiAzure.UrlApi}${urlApiAzure.bannersIndex}${variable}${movil}`
    );
  }
}
