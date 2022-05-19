import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class ServicesColorService {
  constructor(private http: HttpClient) {}

  //TRAIGO TODAS LAS CATEGORIAS
  getAllColors(): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.codigoColores}`);
  }
  //TRAIGO TODAS LOS ATRIBUTOS DEPENDE LO QUE ESCOJA EL USUARIO
  getAllAtributos(url: any): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${url}`);
  }
}
