import { Component, OnInit } from '@angular/core';
import { CarritoItemsComponent } from '../index/menu/carrito-items/carrito-items.component';
import { CarritoItemsService } from '../index/menu/services/carrito-items.service';
import { ListaDeseosService } from './services/lista-deseos.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css'],
})
export class ListaDeseosComponent implements OnInit {
  dataListDeseos: any; //OBTENER LA LISTA DE DESEOS
  productsLength: any; //PARA SUBIR LOS NMEROS DEL CARRITO
  filterPost = '';
  constructor(
    private apiListDeseos: ListaDeseosService,
    private carritoItmes: CarritoItemsComponent, //CARRITO ITEMS COMPONENTS
    private apiCarrito: CarritoItemsService //CARRITO SERVICE
  ) {}

  ngOnInit(): void {
    this.getDataListDeseos(); //PReSENTO LA LISTA DE DESEOS
  }
  //AGREGAR AL CARRITO
  agregarAlCarrito(id: any) {
    this.carritoItmes.getListItemCarrito(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
    setTimeout(() => {
      this.productsLength = this.apiCarrito.obtenerTamañoDelCarrito();
    }, 100);
  }
  //TRAER TODO LO QUE SE OBTUVO DE LA LISTA DE DESEOS
  getDataListDeseos() {
    this.apiListDeseos.listaDeseos.subscribe((res) => {
      this.dataListDeseos = res;
    });
  }
  //ELIMINAR DE LA LISTA DE DESEOS
  eliminarListaDeseos(id: any) {
    this.apiListDeseos.eliminarListaDeseos(id);
  }
}
