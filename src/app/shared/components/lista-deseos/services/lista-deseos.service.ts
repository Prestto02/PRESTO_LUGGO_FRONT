import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MessageFrontEndService } from 'src/app/shared/services/message-front-end.service';
import { errorFront as message } from 'src/app/shared/dictonary/MessageErrorFront';
@Injectable({
  providedIn: 'root',
})
export class ListaDeseosService {
  private ListaDeseosItem = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  listaDeseos = this.ListaDeseosItem.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  addListaDeseosProdut: Array<any> = []; //ARREGLO DE CARRITO DE PRODUCTOS
  constructor(private messageFront: MessageFrontEndService) {}

  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addListaDeseos(dataObj: any) {
    if (this.verifyCarrito(dataObj).length > 0) {
      //SI EXISTE EN EL ARREGLO EL MISMO PRODUCTO NO AGREGARLO
      this.addListaDeseosProdut.length;
      this.messageFront.getInfoMessage(
        message.Info.title,
        message.Info.dobleProducto
      ); //MENSAJE DE ERROR
    } else {
      this.addListaDeseosProdut.push({ ...dataObj }); //GUARDO EL OBJETO EN EN ARREGLO
      this.ListaDeseosItem.next(this.addListaDeseosProdut); //GUARDO EN EL OBSERVABLE EL ARREGLO ASIGNADO
      this.messageFront.getSuccessMessage(
        message.Success.title,
        message.Success.productoAgregado
      ); //OK SE AGREGO EL PRODUCTO
      console.log(this.addListaDeseosProdut);
    }
  }

  eliminarListaDeseos(id: any) {
    const data = this.addListaDeseosProdut.findIndex((res) => res.id === id);
    this.addListaDeseosProdut.splice(data); //ELIMINO LA COINCIDENCIA QUE ENCONTRO
  }

  //VERIFICAR SI EXISTE EN LA LISTA DEL CARRITO
  verifyCarrito(idProduct: any) {
    return this.addListaDeseosProdut.filter((res) => res.id === idProduct.id);
  }
}
