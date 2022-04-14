import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';

@Injectable({
  providedIn: 'root',
})
export class CompararProductosService {
  private ListCProductos = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  listProductC = this.ListCProductos.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  addListProduct: Array<any> = []; //ARREGLO DE CARRITO DE PRODUCTOS
  constructor(private messageFront: MessageFrontEndService) {}
  //AGREGAR LOS PRODUCTOS PARA SU COMPARACION
  addListaDeseos(dataObj: any) {
    if (this.verifyCarrito(dataObj).length > 0) {
      //SI EXISTE EN EL ARREGLO EL MISMO PRODUCTO NO AGREGARLO
      this.messageFront.getInfoMessage(
        message.Info.title,
        message.Info.dobleProducto
      ); //MENSAJE DE ERROR
    } else {
      this.addListProduct.push({ ...dataObj }); //GUARDO EL OBJETO EN EN ARREGLO
      this.ListCProductos.next(this.addListProduct); //GUARDO EN EL OBSERVABLE EL ARREGLO ASIGNADO
      this.messageFront.getSuccessMessage(
        message.Success.title,
        message.Success.productoAgregado
      ); //OK SE AGREGO EL PRODUCTO
    }
  }
  eliminarListaDeseos(id: any) {
    const data = this.addListProduct.findIndex((res) => res.id === id);
    this.addListProduct.splice(data, 1); //ELIMINO LA COINCIDENCIA QUE ENCONTRO
  }

  //VERIFICAR SI EXISTE EN LA LISTA DEL CARRITO
  verifyCarrito(idProduct: any) {
    return this.addListProduct.filter((res) => res.id === idProduct.id);
  }
}
