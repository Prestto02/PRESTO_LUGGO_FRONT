import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from '../../shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private urlApi = UrlApi.ApiUrl;
  private url = UrlApi.articulos; //ARTICulos
  constructor(private http: HttpClient) {}
  //TRAER LOS DATOS
  getDataArticulos(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${this.url}`);
  }
}
