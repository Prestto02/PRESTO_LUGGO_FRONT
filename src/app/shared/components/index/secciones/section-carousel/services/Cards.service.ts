import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { CardsModel } from '../models/CardsModels';

@Injectable({ providedIn: 'root' })
export class CardsService {
  constructor(private http: HttpClient) {}

  getCardsById(id: number): Observable<CardsModel[]> {
    return this.http.get<CardsModel[]>(`${UrlApi.ApiUrl}${UrlApi.cardsApi}${id}`);
  }
}
