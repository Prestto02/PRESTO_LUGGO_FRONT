import { Component, OnInit } from '@angular/core';
import { CarritoItemsService } from '../index/menu-index/menu/services/carrito-items.service';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css'],
})
export class CarritoListComponent implements OnInit {
  productoItems: any;
  constructor(private apiServi: CarritoItemsService) {}
  ngOnInit(): void {
    this.getAllProductsList();
  }
  //ALL PRODUCTOS
  getAllProductsList() {
    this.apiServi.productCarrito.subscribe((res: any) => {
      this.productoItems = res;
    });
    this.getSubtotalPagar();

  }
  //OBTENER EL SUBTOTAL CUANDO SEA SOLO UN ITEMS
  getSubtotalPagar() {
    this.productoItems.map((res: any) => {
      res.subtotal = res.item * res.precio;
    });
  }
}
