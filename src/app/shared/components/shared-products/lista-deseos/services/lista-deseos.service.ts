import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { HttpClient } from '@angular/common/http';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class ListaDeseosService {
  private ListaDeseosItem = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  listaDeseos = this.ListaDeseosItem.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  addListaDeseosProdut: Array<any> = []; //ARREGLO DE CARRITO DE PRODUCTOS
  constructor(
    private messageFront: MessageFrontEndService,
    private http: HttpClient
  ) {}

  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addListaDeseos(dataObj: any) {
    if (this.verifyCarrito(dataObj).length > 0) {
      //SI EXISTE EN EL ARREGLO EL MISMO PRODUCTO NO AGREGARLO
      /*       this.messageFront.getInfoMessage(
        message.Info.title,
        message.Info.dobleProducto
      ); //MENSAJE DE ERROR */
    } else {
      this.addListaDeseosProdut.push({ ...dataObj }); //GUARDO EL OBJETO EN EN ARREGLO
      this.ListaDeseosItem.next(this.addListaDeseosProdut); //GUARDO EN EL OBSERVABLE EL ARREGLO ASIGNADO
      /*       this.messageFront.getSuccessMessage(
        message.Success.title,
        message.Success.productoAgregado
      ); //OK SE AGREGO EL PRODUCTO */
    }
  }
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
  getColeccionId(id: any): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerColeccionPorId}${id}`
    );
  }

  eliminarListaDeseos(id: any) {
    const data = this.addListaDeseosProdut.findIndex(
      (res) => res.id_artic === id
    );
    this.addListaDeseosProdut.splice(data, 1); //ELIMINO LA COINCIDENCIA QUE ENCONTRO
  }

  //VERIFICAR SI EXISTE EN LA LISTA DEL CARRITO
  verifyCarrito(idProduct: any) {
    return this.addListaDeseosProdut.filter(
      (res) => res.id_artic === idProduct.id_artic
    );
  }
}
