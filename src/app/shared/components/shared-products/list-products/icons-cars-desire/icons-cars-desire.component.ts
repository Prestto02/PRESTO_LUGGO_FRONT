import { Component, Input, OnInit } from '@angular/core';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { CarritoItemsComponent } from '../../../index/menu-index/menu/carrito-items/carrito-items.component';

@Component({
  selector: 'app-icons-cars-desire',
  templateUrl: './icons-cars-desire.component.html',
  styleUrls: ['./icons-cars-desire.component.css'],
})
export class IconsCarsDesireComponent implements OnInit {
  @Input('product') products: any | null = null;
  constructor(
    private carritoItmes: CarritoItemsComponent, //CARRITO ITEMS
    private apiListDeseo: AddCarsOrListDesire
  ) {}

  ngOnInit(): void {}
  //AGRGAR AL CARRITO
  agregarAlCarrito(id: any) {
    this.carritoItmes.getListItemCarrito(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
  }

  //AGREGAR LISTA DE DESEOS
  agregarAlDeseo(products: any) {
    this.apiListDeseo.addListDesire(products);
  }
}
