import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css'],
})
export class CarritoItemsComponent implements OnInit {
  totalAPagar = 0;
  totalProducts = 0;
  products: any[] = [
    {
      id: 1,
      codigo: 'CD9812',
      imagen: 'imagen',
      name: 'Audifonos Sony',
      precio: 80.0,
      subtotal: 0,
      item: 1,
    },
    {
      id: 2,
      codigo: 'CD9821',
      imagen: 'imagen',
      name: 'Play Station 5',
      precio: 500.0,
      subtotal: 0,
      item: 1,
    },
    {
      id: 3,
      codigo: 'CD8271',
      imagen: 'imagen',
      name: 'Computadora Gamer',
      precio: 400.0,
      subtotal: 0,
      item: 1,
    },
    {
      id: 4,
      codigo: 'CD8279',
      imagen: 'imagen',
      name: 'Laptop Gamer',
      precio: 600.0,
      subtotal: 0,
      item: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.totalPago();
  }
  //TRAER AL CARRITO

  //TOTAL AL OBTENER LOS PRODUCTOS EN EL CARRITO
  totalPago() {
    this.products.map((res) => {
      if (res.subtotal === 0) {
        this.totalAPagar = this.totalAPagar + res.precio;
      }
    });
  }
  //CALCULAR EL TOTAL DEl CARRITO CUANDO SE LE CAMBIE EL ITEMS
  carritoTotal() {
    this.totalAPagar = 0;
    this.products.map((res) => {
      const subtotal = res.precio * res.item;
      this.totalAPagar = this.totalAPagar + subtotal;
    });
  }

  //INCREMENTAR ITEMS
  increment(id: any) {
    this.products
      .filter((elements) => elements.id === id) //BUSCO EL ELEMENTO
      .map((res) => {
        //RECORRO EL ElEMENTO Y LE SUMO 1 AL CARRITO
        res.item = res.item + 1;
        res.subtotal = res.precio * res.item; //MULTIPLICO CON El ITEM Y EL PRECIO
        this.carritoTotal();
      });
  }
  //DISMINUIR ITEMS
  descrement(id: any) {
    this.products
      .filter((elements) => elements.id === id) //BUSCO EL ELEMENTO
      .map((res) => {
        //SI ES MAYOR A 0 LE RESTO CASO CONTRARIO NO HAGO NADA
        if (res.item > 1) {
          res.item = res.item - 1;
          res.subtotal = res.precio * res.item;
          this.carritoTotal();
        }
      });
  }
}
