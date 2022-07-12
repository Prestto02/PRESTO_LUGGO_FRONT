import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class CiudadPaisService {
  constructor(private http: HttpClient) {}
  //TODOS LOS PAISES
  getPaises(): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.paises}`);
  }
  //TODAS LAS CIUDADES
  getCiudades(codigoPais: any): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.ciudad}${codigoPais}`);
  }
}
