import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class SelectAtributosService {
  constructor(private http: HttpClient) {}

  getColorsAtributos(): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.codigoColores}`);
  }

  getDataAtributos(url: any): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${url}`);
  }

  postAtributos(url: any, form: any): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${url}`, form);
  }

  getMaterial(): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.material}`);
  }
}
