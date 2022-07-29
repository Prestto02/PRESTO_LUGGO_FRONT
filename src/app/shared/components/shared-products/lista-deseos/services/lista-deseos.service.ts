import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { HttpClient } from '@angular/common/http';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { ProductListApi } from '../../models/ProducstList';

@Injectable({
  providedIn: 'root',
})
export class ListaDeseosService {
  private ListaDeseosItem = new BehaviorSubject<Array<ProductListApi>>([]); //CREO El behaviorSUBJECT
  listaDeseos = this.ListaDeseosItem.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  addListaDeseosProdut: Array<ProductListApi> = []; //ARREGLO DE CARRITO DE PRODUCTOS
  constructor(
    private messageFront: MessageFrontEndService,
    private http: HttpClient
  ) {}

  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addListaDeseos(dataObj: ProductListApi, messageValor?: boolean) {
    if (this.verifyCarrito(dataObj).length > 0) {
      //SI EXISTE EN EL ARREGLO EL MISMO PRODUCTO NO AGREGARLO
      /*       this.messageFront.getInfoMessage(
        message.Info.title,
        message.Info.dobleProducto
      ); //MENSAJE DE ERROR */
    } else {
      this.addListaDeseosProdut.push({ ...dataObj }); //GUARDO EL OBJETO EN EN ARREGLO
      this.ListaDeseosItem.next(this.addListaDeseosProdut); //GUARDO EN EL OBSERVABLE EL ARREGLO ASIGNADO
      if (!messageValor) {
        this.messageFront.getSuccessMessage(
          message.Success.title,
          message.Success.productoAgregado
        ); //OK SE AGREGO EL PRODUCTO
      }
    }
  }
  /* COLECCION DE LISTA DE DESEOS POR USUARIO */
  getAllColeccion(id: any): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.traerColeccion}${id}`);
  }
  //AGREGAR NUEVA COLECCION
  postListaColeccion(form: any): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.coleccionListaDeseos}`,
      form
    );
  }
  //EDITAR COLECCION
  putListaColeccion(form: any): Observable<any> {
    return this.http.post<any>(
      `${UrlApi.ApiUrl}${UrlApi.putColeccionListaDeseos}`,
      form
    );
  }
  //TRAER COLECCION POR ID
  getColeccionId(id: any): Observable<ProductListApi> {
    return this.http.get<ProductListApi>(
      `${UrlApi.ApiUrl}${UrlApi.traerColeccionPorId}${id}`
    );
  }
  /* QUITARLO DE LA LISTA DE DESEOS */
  eliminarListaDeseos(id: any) {
    const data = this.addListaDeseosProdut.findIndex(
      (res) => res.id_artic === id
    );
    this.addListaDeseosProdut.splice(data, 1); //ELIMINO LA COINCIDENCIA QUE ENCONTRO
  }
  //VERFICO EL LISTA EN EL LOCAL STORAGE
  verifyListLocalStorage() {
    const itemsList: any = localStorage.getItem('listDeseoItems');
    const data = JSON.parse(itemsList); //TRANSFORMANDO LO QUE TENGO EN EL LOCAL STORAGE
    if (data) {
      data.map((res: any) => {
        this.addListaDeseos(res, true); //REOCORRO Y INSERTO EN EL ARRAY
      });
    }
  }
  //GUARDAR EL LIST DEL LOCAL STORAGE
  saveListLocalStorage() {
    let listItems: any = [];
    if (this.addListaDeseosProdut.length > 0) {
      //SI ES MAYOR GUARDO EL NUEVO ARRAY
      this.listaDeseos.subscribe((res: any) => {
        listItems = res;
      });
      localStorage.setItem('listDeseoItems', JSON.stringify(listItems));
    } else {
      localStorage.removeItem('listDeseoItems'); //SI ES MENOR A 0 ELIMINO EL LOCALSTORAGE
    }
  }
  //VERIFICAR SI EXISTE EN LA LISTA DEL CARRITO
  verifyCarrito(idProduct: any) {
    return this.addListaDeseosProdut.filter(
      (res) => res.id_artic === idProduct.id_artic
    );
  }
}
