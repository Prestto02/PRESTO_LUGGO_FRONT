import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from '../../../shared/routes/RoutesApi';
//TRAER EL NOMBRE DEL ARITUCLO CON SU RESPECTIVO ID

@Injectable({
  providedIn: 'root',
})
export class SearchProductsService {
  private listProductName = new BehaviorSubject<Array<any>>([]);
  listProduct = this.listProductName.asObservable();

  constructor(private http: HttpClient) {}

  getNameProduct(name: any): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.buscarProductoNombre}${name}`
    );
  }
  addProductName(data: any) {
    this.listProductName.next(data);
  }
}
