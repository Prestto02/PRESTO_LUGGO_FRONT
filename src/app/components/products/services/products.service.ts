import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from '../../shared/routes/RoutesApi';
import { HeadersService } from '../../shared/services/headers.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = UrlApi.articulos;
  constructor(private http: HttpClient, private _header: HeadersService) {}
  //TRAER LOS DATOS
  getDataArticulos(): Observable<any> {
    return this.http.get<any>(this.url, this._header.httpOptions);
  }
}
