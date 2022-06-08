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
}
