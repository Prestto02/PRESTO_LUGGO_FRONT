import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class BuscadorProductosService {
  private listProductoBuscados = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  listProduct = this.listProductoBuscados.asObservable(); //OBTENGO EL BEHAVIORSUBJECT

  private messageSearchUser = new BehaviorSubject<any>(''); //MENSAJE DE ERROR SI NO ENCUENTRA EL PRODUCTO POR INTENTOS
  messageSearchUserErrors = this.messageSearchUser.asObservable();
  constructor(private http: HttpClient) {}
  //TRAER TODOS LOS PRODUCTOS
  getAllBuscadorProduct(resp: any): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.buscarProductoIndex}/${resp}`
    );
  }
  //AGREGAR A LA LISTA DE BUSCAR PRODUCTOS
  addSearchListProducts(data: any) {
    this.listProductoBuscados.next(data);
  }
  //ADD MESSAGE ERROR USERS PRODUCT
  addMessageErrorsUserProduct(message: any) {
    this.messageSearchUser.next(message);
  }
  //UNSUSCRIBE DATA
  unSuscribeData() {
    const data: any = [];
    this.listProductoBuscados.next(data);
    this.messageSearchUser.next('');
  }
  //BUSCAR PRODUCTOS POR INTENTOS
  buscarProductosIntentos(resp: any, data: any): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.busquedaIntentoUser}${resp}`,
      data
    );
  }
}
