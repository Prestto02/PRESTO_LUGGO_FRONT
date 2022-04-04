import { Component, OnInit } from '@angular/core';
import { CarritoItemsService } from '../services/carrito-items.service';

@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css'],
})
export class CarritoItemsComponent implements OnInit {
  totalAPagar = 0;
  productoItems: any;
  constructor(private apiServi: CarritoItemsService) {}

  ngOnInit(): void {
    this.getItemCarrito();
  }
  //OBTENER EL ID DEl PRODUCTO
  getListItemCarrito(id: any) {
    this.apiServi.getDataProducts(id).subscribe((res) => {

      this.apiServi.addProductCarrito(res); //GUARDO ESE PRODUCTO EN UN ARREGLO BEHAVIOR
    });
  }
  //ME SUSCRIBO PARA GUARDAR LA LISTA DE PRODUCTOS QUE TENGO
  getItemCarrito() {
    this.apiServi.productCarrito.subscribe((res) => {
      //ME SUSCRIBO AL RXJS DEl SERVICIO
      this.productoItems = res;
      this.totalPago(); //CALCULO EL TOTAL A PAGAR
    });
  }
  //TOTAL AL OBTENER LOS PRODUCTOS EN EL CARRITO
  totalPago() {
    this.totalAPagar = 0; //ASIGNO A 0 PARA HACER LA NUEVA MULTIPLICACION
    this.productoItems.map((res: any) => {
      if (res.subtotal === 0) {
        this.totalAPagar = this.totalAPagar + res.precio; //SUMO EL TOTAL A PAGAR CON EL PRECIO
      }
    });
  }
  //CALCULAR EL TOTAL DEl CARRITO CUANDO SE LE CAMBIE EL ITEMS
  carritoTotal() {
    this.totalAPagar = 0;
    this.productoItems.map((res: any) => {
      const subtotal = res.precio * res.item;
      this.totalAPagar = this.totalAPagar + subtotal;
    });
  }

  //INCREMENTAR ITEMS
  increment(id: any) {
    this.productoItems
      .filter((elements: any) => elements.id_artic === id) //BUSCO EL ELEMENTO
      .map((res: any) => {
        //RECORRO EL ElEMENTO Y LE SUMO 1 AL CARRITO
        res.item = res.item + 1;
        res.subtotal = res.precio * res.item; //MULTIPLICO CON El ITEM Y EL PRECIO
        this.carritoTotal();
      });
  }
  //DISMINUIR ITEMS
  descrement(id: any) {
    this.productoItems
      .filter((elements: any) => elements.id_artic === id) //BUSCO EL ELEMENTO
      .map((res: any) => {
        //SI ES MAYOR A 0 LE RESTO CASO CONTRARIO NO HAGO NADA
        if (res.item > 1) {
          res.item = res.item - 1;
          res.subtotal = res.precio * res.item;
          this.carritoTotal();
        }
      });
  }
}
