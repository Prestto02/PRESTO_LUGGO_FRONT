import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { HttpClient } from '@angular/common/http';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';
import { ProductListApi } from '../../models/ProducstList';
import { CollecionUser, ListDesireUser } from '../model/ListDesireUser.models';

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
  addListaDeseos(dataObj: ProductListApi, messageValor?: boolean): void {
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
        this.messageFront.getSuccessMessageListDesire('', 'Guardado en favoritos'); //OK SE AGREGO EL PRODUCTO
      }
    }
  }
  /* COLECCION DE LISTA DE DESEOS POR USUARIO */
  getAllColeccion(id: any): Observable<ReadonlyArray<CollecionUser>> {
    return this.http.get<ReadonlyArray<CollecionUser>>(
      `${UrlApi.ApiUrl}${UrlApi.traerColeccion}${id}`
    );
  }
  /* TODAS LAS LISTA DEL PRODUCTOS */
  getAllListDesire(): Observable<ProductListApi[]> {
    return this.http.get<ProductListApi[]>(
      `${UrlApi.ApiUrl}${UrlApi.misDetallesLista}`
    );
  }
  //AGREGAR NUEVA COLECCION
  postListaColeccion(form: ListDesireUser): Observable<any> {
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
  /* DELETE COLLECION PRODUCT */
  deleteListProductCollection(id_detalle_artic: number): Observable<any> {
    return this.http.delete<any>(
      `${UrlApi.ApiUrl}${UrlApi.putColeccionListaDeseos}/${id_detalle_artic}`
    );
  }
  //TRAER COLECCION POR ID
  getColeccionId(id: any): Observable<ProductListApi[]> {
    return this.http.get<ProductListApi[]>(
      `${UrlApi.ApiUrl}${UrlApi.traerColeccionPorId}${id}`
    );
  }
  /* QUITARLO DE LA LISTA DE DESEOS */
  eliminarListaDeseos(id: any) {
    const data = this.addListaDeseosProdut.findIndex(
      (res) => res.id_artic === id
    );
    this.addListaDeseosProdut.splice(data, 1); //ELIMINO LA COINCIDENCIA QUE ENCONTRO
    /* ELIMINADO DE FAVORITO */
    this.messageFront.getSuccessMessageListDesire('', 'Eliminado de favorito');
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
