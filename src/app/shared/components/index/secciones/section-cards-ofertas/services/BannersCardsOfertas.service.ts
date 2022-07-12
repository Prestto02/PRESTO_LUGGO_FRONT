import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlApiAzure } from 'src/app/shared/routes/RoutesApiAzure';

@Injectable({ providedIn: 'root' })
export class BannersCardsOFertas {
  constructor(private http: HttpClient) {}

  getElementsBannersOfertas(): Observable<any> {
    return this.http.get<any>(
      `${urlApiAzure.UrlApi}${urlApiAzure.bannersCruzIndex}`
    );
  }
}
