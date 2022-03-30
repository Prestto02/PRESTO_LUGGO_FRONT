import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { MessageFrontEndService } from 'src/app/shared/services/message-front-end.service';
import { UrlApi } from '../../../../routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class CarritoItemsService {
  private productCarritoItem = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  productCarrito = this.productCarritoItem.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  addCarritoProduct: Array<any> = []; //ARREGLO DE CARRITO DE PRODUCTOS
  productsLength = 0; //PARA GUARDAR EL TOTAL DEL ARREGLO
  //CONSTRUCTOR
  constructor(
    private http: HttpClient,
    private messageFront: MessageFrontEndService
  ) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(
      `${UrlApi.ApiUrl}${UrlApi.traerProductosCarrito}` //PEDIR TODOS LOS PRODUCTOS
    );
  }
  //PAGINACION DE LA API
  getDataProducts(id: any): Observable<any> {
    return this.http.get<any>(`${UrlApi.ApiUrl}${UrlApi.buscarProductos}${id}`); //BUSCAR EL PRODUCTO A LA API
  }
  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addProductCarrito(dataObj: any) {
    if (this.verifyCarrito(dataObj).length > 0) {
      //SI EXISTE EN EL ARREGLO EL MISMO PRODUCTO NO AGREGARLO
      this.addCarritoProduct.length;
      this.messageFront.getInfoMessage(
        message.Info.title,
        message.Info.dobleProducto
      ); //MENSAJE DE ERROR
    } else {
      this.addCarritoProduct.push({ ...dataObj }); //GUARDO EL OBJETO EN EN ARREGLO
      this.productCarritoItem.next(this.addCarritoProduct); //GUARDO EN EL OBSERVABLE EL ARREGLO ASIGNADO
      this.obtenerTamañoDelCarrito();
      this.messageFront.getSuccessMessage(
        message.Success.title,
        message.Success.productoAgregado
      ); //OK SE AGREGO EL PRODUCTO
    }
  }
  //OBTENER EL TAMAÑOO TOTAL DEL CARRITO
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
