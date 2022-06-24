import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCardsById(id: number): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.cardsApi}${id}`);
  }
}
