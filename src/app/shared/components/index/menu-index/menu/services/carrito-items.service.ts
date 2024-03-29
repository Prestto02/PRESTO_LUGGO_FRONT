import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { UrlApi } from '../../../../../routes/RoutesApi';

@Injectable({
  providedIn: 'root',
})
export class CarritoItemsService {
  private productCarritoItem = new BehaviorSubject<Array<any>>([]); //BEHAVIOR PARA LA LISTA DE PRODUCTOS
  productCarrito = this.productCarritoItem.asObservable(); //OBTENGO EL SUSCRIBE PARA LA LISTA DE PRODUCTO
  addCarritoProduct: Array<any> = []; //ARREGLO DE CARRITO DE PRODUCTOS
  private productsLength = new BehaviorSubject<Number>(0); //BEHAVIOR PARA EL TOTAL DE PRODUCTOS
  productsLengthtotal = this.productsLength.asObservable(); //OBTENGO EL SUSCRIBE PARA EL TOTAL DE PRODUCTOS
  private totalAPagarOb = new BehaviorSubject<any>(''); //TOTAL A PAGAR OBSERVABLE
  totalAPagar$ = this.totalAPagarOb.asObservable();
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
      /*       this.messageFront.getSuccessMessage(
        message.Success.title,
        message.Success.productoAgregado
      ); //OK SE AGREGO EL PRODUCTO */
    }
  }
  //VERFICO EL CARRITO EN EL LOCAL STORAGE
  verifyCarsLocalStorage() {
    const itemsCars: any = localStorage.getItem('carritoItems');
    const data = JSON.parse(itemsCars); //TRANSFORMANDO LO QUE TENGO EN EL LOCAL STORAGE
    if (data) {
      data.map((res: any) => {
        this.addProductCarrito(res); //REOCORRO Y INSERTO EN EL ARRAY
      });
    }
  }
  //OBTENER EL TAMAÑOO TOTAL DEL CARRITO
  obtenerTamañoDelCarrito() {
    const total = this.addCarritoProduct.length;
    this.productsLength.next(total);
  }
  //GUARDAR EL CARS DEL LOCAL STORAGE
  saveCarsLocalStorage() {
    let carritoItems: any = [];
    if (this.addCarritoProduct.length > 0) {
      //SI ES MAYOR GUARDO EL NUEVO ARRAY
      this.productCarrito.subscribe((res: any) => {
        carritoItems = res;
      });
      localStorage.setItem('carritoItems', JSON.stringify(carritoItems));
    } else {
      localStorage.removeItem('carritoItems'); //SI ES MENOR A 0 ELIMINO EL LOCALSTORAGE
    }
  }
  //VERIFICAR SI EXISTE EN LA LISTA DEL CARRITO
  verifyCarrito(idProduct: any) {
    return this.addCarritoProduct.filter(
      (res) => res.id_artic === idProduct.id_artic
    );
  }
  //ELIMINAR DE LA LISTA DEL CARRITO
  eliminarItemsCarrito(id: any) {
    const data = this.addCarritoProduct.findIndex((res) => res.id_artic === id);
    this.addCarritoProduct.splice(data, 1); //ELIMINO LA COINCIDENCIA QUE ENCONTRO
    this.obtenerTamañoDelCarrito();
    this.saveCarsLocalStorage();
  }

  //TOTAL A PAGAR OBSERVABLE PARA REFLEJAR TODOS LOS CAMBIOS SEGUN LOS COMPONENTES SUSCRIPTOS
  totalAPAgarObservable(totalAPagar: any) {
    this.totalAPagarOb.next(totalAPagar);
  }

  eliminarTodo() {
    this.addCarritoProduct = [];
    this.productCarritoItem.next(this.addCarritoProduct);
    this.obtenerTamañoDelCarrito();
  }
}
