import { Component, Input, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { CarritoItemsService } from '../../index/menu-index/menu/services/carrito-items.service';

@Component({
  selector: 'app-items-carrito',
  templateUrl: './items-carrito.component.html',
  styleUrls: ['./items-carrito.component.css'],
})
export class ItemsCarritoComponent implements OnInit {
  @Input('carritoProductList') carritoProductList: any | null = null;
  public urlImg = RepositorioImg.urlRepositorio;
  arrayTheadTable: any = [
    'Imagen',
    'Nombre del producto',
    'Precio',
    'Cantidad',
    'SubTotal',
    'Acción',
  ];
  totalAPagar: any = 0;
  constructor(private apiServi: CarritoItemsService) {}

  ngOnInit(): void {
    this.getSubtotalCarrito();
    this.totalAPagarCarrito();
    this.getCarritoLength();
  }
  //OBTENGO EL SUBTOTAL DEL CARRITO
  getSubtotalCarrito() {
    this.totalAPagar = 0;
    this.carritoProductList.map((res: any) => {
      this.totalAPagar = this.totalAPagar + res.subtotal; //REALIZO LA SUMA SEGUN LOS PRODUCTOS EN EL ARREGLO OBSERVABLE
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
  }
  //ACTUALIZAR EL TAMAÑO DEL CARRITO
  getCarritoLength() {
    this.apiServi.obtenerTamañoDelCarrito();
  }
  //ELIMINAR ITEMS DEL CARRITO
  removeItemsCarrito(id: any) {
    this.apiServi.eliminarListaDeseos(id);
    this.getSubtotalCarrito(); //OBTENER EL NUEVO SUBTOTAL DEL CARRITO
    this.getCarritoLength(); // ACTUALIZAR EL TAMAÑO DEL CARRITO
  }
  //ME SUSCRIBO AL TOTAL A PAGAR
  totalAPagarCarrito() {
    this.apiServi.totalAPagar$.subscribe((res: any) => {
      this.totalAPagar = res;
    });
  }

  //VERIFYCHANGE USER
  verifyChange(e: any, id: any) {
    if (e.target.value <= 0) {
      e.target.value = 1;
    }
    const res = this.buscarProductoId(id); //OBTENGO EL ID DEL PRODUCTO
    res[0].item = e.target.value;
    res[0].subtotal = res[0].precio * res[0].item; //MULTIPLICO CON El ITEM Y EL PRECIO
    this.getSubtotalCarrito();
  }
  //DESCREMENT INPUT TARGET ITEMS
  descrement(id: any) {
    const res = this.buscarProductoId(id);
    //SI ES MAYOR A 0 LE RESTO CASO CONTRARIO NO HAGO NADA
    if (res[0].item > 1) {
      res[0].item = res[0].item - 1;
      res[0].subtotal = res[0].precio * res[0].item;
      this.getSubtotalCarrito();
    }
  }

  //INCREMENT INPUT TARGE ITEMS
  //INCREMENTAR ITEMS
  increment(id: any) {
    const res = this.buscarProductoId(id); //BUSCO EL PRODUCTO ID
    res[0].item++; //HAGO LA SUMA
    res[0].subtotal = res[0].precio * res[0].item; //MULTIPLICO CON El ITEM Y EL PRECIO
    this.getSubtotalCarrito();
  }
  //BUSCAR EL ID DEL PRODUCTO DEL ARREGLO ASIGNADO DEL CARRITO
  buscarProductoId(id: any) {
    return this.carritoProductList
      .filter((elements: any) => elements.id_artic === id)
      .map((res: any) => {
        return res;
      });
  }
}
