import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css'],
})
export class CarritoItemsComponent implements OnInit {
  valor = 0;
  constructor() {}

  ngOnInit(): void {}
  increment() {
    this.valor = this.valor + 1;
  }
  descrement() {
    this.valor === 0 ? (this.valor = 0) : (this.valor = this.valor - 1);
  }
}
