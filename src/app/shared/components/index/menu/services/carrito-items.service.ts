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
  addCarritoProduct: Array<any> = [];
  productsLength = 0;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerProductosCarrito}`
    );
  }
  //PAGINACION DE LA API
  getDataProducts(id: any): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.buscarProductos}${id}`);
  }
  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addProductCarrito(dataObj: any) {
    if (this.verifyCarrito(dataObj).length > 0) {
      this.addCarritoProduct.length;
    } else {
      this.addCarritoProduct.push({ ...dataObj });
      this.productCarritoItem.next(this.addCarritoProduct);
      this.obtenerTamañoDelCarrito();
    }
  }
  obtenerTamañoDelCarrito() {
    return this.addCarritoProduct.length;
  }

  //VERIFICAR SI EXISTE EN LA LISTA DEL CARRITO
  verifyCarrito(idProduct: any) {
    return this.addCarritoProduct.filter(
      (res) => res.id_artic === idProduct.id_artic
    );
  }
}
