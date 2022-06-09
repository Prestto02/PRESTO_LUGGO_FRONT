import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
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
  idUser: any;
  constructor(
    private apiServi: CarritoItemsService,
    private router: Router,
    private token: TokenService,
    private apiCarritoUser: CarritoUserLoginService
  ) {
    this.idUser = this.token.getTokenId();
  }
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
    this.router.navigate([
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}`,
      'todos',
    ]);
  }
  //PUSH ARRAY DETALLE_CARRITO
  pushDetalleCarrito() {
    this.productoItems.map((res: any) => {
      this.detalle_carrito.push({
        id_detalle_articulo: res.id_detalle_articulo,
        cantidad: res.item,
      });
    });
  }
  //POST CARRITO ITEMS
  postCarritoItems() {
    this.pushDetalleCarrito(); //PUSH DETALLE CARRITO
    const form = {
      id_usuario: this.idUser,
      detalle_carrito: this.detalle_carrito,
    };
    //POST CARRITO ITEMS
    this.apiCarritoUser.postCarritoItems(form).subscribe((res) => {
      this.router.navigateByUrl(
        `${UrlFront.Pagar.pagar}/${UrlFront.Pagar.processoPagar}`
      );
    });
  }
  //REGRESAR AL LOGIN
  irLogin() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  //IR AL METODO DE PAGO
  irAPAgar() {
    this.idUser ? this.postCarritoItems() : this.irLogin();
  }
}
