import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from '../../../../routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class CarritoItemsService {
  private productCarritoItem = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  productCarrito = this.productCarritoItem.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  adddCarritoProduct: Array<any> = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerProductosCarrito}`
    );
  }
  //PAGINACION DE LA API
  getDataProducts(id: any): Observable<any> {
    return this.http.get<any>(
      `https://api.instantwebtools.net/v1/passenger/${id}`
    );
  }
  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addProductPagination(dataObj: any) {
    this.adddCarritoProduct.push(...dataObj);
    this.productCarritoItem.next(this.adddCarritoProduct);
  }
}
