import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from '../../shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productDataSource = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  productDataPagination = this.productDataSource.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  //CONSTRUCTOR
  dataScrollProduct: Array<any> = []; //PARA GUARDAR EN UN ARRAY LO QUE PIDA DE LA PAGINACION DE LA API

  constructor(private http: HttpClient) {}
  //TRAER LOS DATOS
  getDataArticulos(): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.articulos}`);
  }
  //${this.urlApi}${this.urlCarrito}?pagina=${page}&size=${size}
  //PAGINACION DE LA API
  getCharacterByPage(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerProductosCarrito}?pagina=${page}&size=${size}`
    );
  }
  postDataArticulo(form: any): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${UrlApi.articulos}`, form);
  }
  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addProductPagination(dataObj: any) {
    this.dataScrollProduct.push(...dataObj);
    this.productDataSource.next(this.dataScrollProduct);
  }
}
