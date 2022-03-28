import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from '../../shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private urlApi = UrlApi.ApiUrl;
  private url = UrlApi.articulos; //ARTICulos
  private urlCarrito = UrlApi.traerProductosCarrito;
  private productDataSource = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  productDataPagination = this.productDataSource.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  //CONSTRUCTOR
  dataScrollProduct: Array<any> = []; //PARA GUARDAR EN UN ARRAY LO QUE PIDA DE LA PAGINACION DE LA API

  constructor(private http: HttpClient) {}
  //TRAER LOS DATOS
  getDataArticulos(): Observable<any> {
    return this.http.get<any>(`${this.urlApi}${this.url}`);
  }
  //${this.urlApi}${this.urlCarrito}?pagina=${page}&size=${size}
  //PAGINACION DE LA API
  getCharacterByPage(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`
    );
  }
  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addProductPagination(dataObj: any) {
    this.dataScrollProduct.push(...dataObj);
    this.productDataSource.next(this.dataScrollProduct);
  }
}
