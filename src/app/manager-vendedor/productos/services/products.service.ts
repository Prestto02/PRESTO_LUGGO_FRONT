import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from '../../../shared/routes/RoutesApi';

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
  //TRAER TODOS LOS PRODUCTOS POR PAGINACION
  getDataProductos(): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.listProductsUsers}`);
  }
  //VERIFICAR ARCHIVO
  postVerifyImg(archivo: any): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.verificarImg}`,
      archivo
    );
  }
  //PAGINACION DE LA API PARA SCROLL INFINITO
  getCharacterByPage(page: number, size: number): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerProductosCarrito}?pagina=${page}&size=${size}`
    );
  }
  //PAGINACION PRA LA CONSULTA DE UN ARITCULO CON SCROLL INFINITO
  getCharacterSearchByPage(nombre: any): Observable<any> {
    //`${UrlApi.ApiUrl}${UrlApi.traerProductosCarrito}?pagina=${page}&size=${size}`
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerProductosIndex}${nombre}`
    );
  }
  //crear nuevo nombre de articulo
  postNewArticuloNombre(form: any) {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.paraCrearArticulo}`,
      form
    );
  }
  //POST DATA ARTICULOS
  postDataArticulo(form: any): Observable<any> {
    return this.http.post<any>(`${UrlApi.ApiUrl}${UrlApi.articulos}`, form);
  }
  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addProductPagination(dataObj: any) {
    let hash: any = {};
    this.dataScrollProduct.push(...dataObj);
    this.dataScrollProduct = this.dataScrollProduct.filter(
      (res: any) => (hash[res.id_artic] ? false : (hash[res.id_artic] = true)) //PARA QUITAR LOS PRODUCTOS REPETIDOS
    );
    this.productDataSource.next(this.dataScrollProduct);
  }
  //ELIMINAR PRODUCTO
  eliminarProducto(id: any) {
    return this.http.delete<any>(`${UrlApi.ApiUrl}${UrlApi.articulos}/${id}`);
  }
  //DESUSCRIBIRSE
  unSuscribeObservable() {
    this.dataScrollProduct = [];
    this.productDataSource.next(this.dataScrollProduct);
  }
}
