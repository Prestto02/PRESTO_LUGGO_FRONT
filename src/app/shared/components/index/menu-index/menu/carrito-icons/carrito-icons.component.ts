import { Component, Input, OnInit } from '@angular/core';
import { CarritoItemsService } from '../services/carrito-items.service';

@Component({
  selector: 'app-carrito-icons',
  templateUrl: './carrito-icons.component.html',
  styleUrls: ['./carrito-icons.component.css'],
})
export class CarritoIconsComponent implements OnInit {
  totalCarrito: any;
  constructor(
    private apiForm: CarritoItemsService //FORMULARIO CATEGORIAS
  ) {}

  ngOnInit(): void {
    this.totalItemsCarrito(); //TOTAL DE ITEMS DEL CARRITO
  }
  //TOTAL ITEMS CARRITO
  totalItemsCarrito() {
    this.apiForm.productsLengthtotal.subscribe((res) => {
      this.totalCarrito = res;
    });
  }
}
