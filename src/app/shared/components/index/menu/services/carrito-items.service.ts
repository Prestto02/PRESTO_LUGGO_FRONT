import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from '../../../../routes/RoutesApi';
import { HeadersService } from '../../../../services/headers.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoItemsService {
  constructor(private http: HttpClient, private header: HeadersService) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerProductosCarrito}`,
      this.header.httpOptions
    );
  }
}
