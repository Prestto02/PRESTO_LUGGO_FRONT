import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from '../../routes/RoutesFront';
import { CarritoItemsService } from '../index/menu-index/menu/services/carrito-items.service';
import { CarritoUserLoginService } from './services/carrito-user-login.service';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css'],
})
export class CarritoListComponent implements OnInit {
  productoItems: any;
  detalle_carrito: any = [];
  constructor(
    private apiServi: CarritoItemsService,
    private router: Router,
    private apiCarritoUser: CarritoUserLoginService
  ) {}
  ngOnInit(): void {
    this.getAllProductsList();
  }
  //OBTENGO LOS PRODUCTOS
  getAllProductsList() {
    this.apiServi.productCarrito.subscribe((res: any) => {
      this.productoItems = res;
    });
    this.getSubtotalPagar(); //ACTUALIZO LA PAGA DEL SUBTOTAL
  }
  //OBTENER EL SUBTOTAL CUANDO SEA SOLO UN ITEMS
  getSubtotalPagar() {
    this.productoItems.map((res: any) => {
      res.subtotal = res.item * res.precio;
    });
  }
  //IR A BUSCAR MAS PRODUCTOS
  irAProductos() {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.buscar}`);
  }

  //IR AL METODO DE PAGO
  irAPAgar() {
    this.productoItems.map((res: any) => {
      this.detalle_carrito.push({
        id_detalle_articulo: res.id_detalle_articulo,
        cantidad: res.item,
      });
    });
    const form = {
      id_usuario: 1,
      detalle_carrito: this.detalle_carrito,
    };
    this.apiCarritoUser.postCarritoItems(form).subscribe((res) => {
      console.log(res);
    });
  }
}
