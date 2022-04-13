import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { UrlApi } from '../../../../routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class CarritoItemsService {
  private productCarritoItem = new BehaviorSubject<Array<any>>([]); //BEHAVIOR PARA LA LISTA DE PRODUCTOS
  productCarrito = this.productCarritoItem.asObservable(); //OBTENGO EL SUSCRIBE PARA LA LISTA DE PRODUCTO
  addCarritoProduct: Array<any> = []; //ARREGLO DE CARRITO DE PRODUCTOS
  private productsLength = new BehaviorSubject<Number>(0); //BEHAVIOR PARA EL TOTAL DE PRODUCTOS
  productsLengthtotal = this.productsLength.asObservable(); //OBTENGO EL SUSCRIBE PARA EL TOTAL DE PRODUCTOS
  //CONSTRUCTOR
  constructor(
    private http: HttpClient,
    private messageFront: MessageFrontEndService
  ) {}
  //PEDIR LOS PRODUCTOS
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
      this.messageFront.getInfoMessage(
        message.Info.title,
        message.Info.dobleProducto
      ); //MENSAJE DE ERROR
    } else {
      this.addCarritoProduct.push({ ...dataObj }); //GUARDO EL OBJETO EN EN ARREGLO
      this.productCarritoItem.next(this.addCarritoProduct); //GUARDO EN EL OBSERVABLE EL ARREGLO ASIGNADO
      this.obtenerTamañoDelCarrito(); //OBTENGO EL TAMAÑO DEL ARREGLO addCarritoProduct LENGTH
      this.messageFront.getSuccessMessage(
        message.Success.title,
        message.Success.productoAgregado
      ); //OK SE AGREGO EL PRODUCTO
    }
  }
  //OBTENER EL TAMAÑOO TOTAL DEL CARRITO
  obtenerTamañoDelCarrito() {
    const total = this.addCarritoProduct.length;
    this.productsLength.next(total);
  }

  //VERIFICAR SI EXISTE EN LA LISTA DEL CARRITO
  verifyCarrito(idProduct: any) {
    return this.addCarritoProduct.filter(
      (res) => res.id_artic === idProduct.id_artic
    );
  }
}
