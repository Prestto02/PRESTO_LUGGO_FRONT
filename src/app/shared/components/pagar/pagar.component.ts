import { Component, OnInit } from '@angular/core';
import { CarritoItemsService } from '../index/menu-index/menu/services/carrito-items.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css'],
})
export class PagarComponent implements OnInit {
  arrayProductsList: any = [];
  totalAPagar: any = 0;
  constructor(private apiServi: CarritoItemsService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.sumaTotalYSubtotal();
  }
  //TODOS LOS PRODUCTOS
  getAllProducts() {
    this.apiServi.productCarrito.subscribe((res: any) => {
      this.arrayProductsList = res;
    });
    this.totalAPagarCarrito();
  }
  sumaTotalYSubtotal() {
    this.totalAPagar = 0;
    this.arrayProductsList.map((res: any) => {
      this.totalAPagar = this.totalAPagar + res.subtotal; //REALIZO LA SUMA SEGUN LOS PRODUCTOS EN EL ARREGLO OBSERVABLE
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
  }
  //ME SUSCRIBO AL TOTAL A PAGAR
  totalAPagarCarrito() {
    this.apiServi.totalAPagar$.subscribe((res: any) => {
      this.totalAPagar = res;
    });
  }
}
