import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from '../services/carrito-items.service';

@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css'],
})
export class CarritoItemsComponent implements OnInit {
  totalAPagar = 0;
  productoItems: any;
  public urlImg = RepositorioImg.urlRepositorio;
  constructor(
    @Inject(DOCUMENT) private document: Document, //DOCUMENT
    private apiServi: CarritoItemsService,
    private router: Router,
    private addCars: AddCarsOrListDesire
  ) {}

  ngOnInit(): void {
    this.document.documentElement.scrollTop = 0;
    this.getItemCarrito();
  }
  //OBTENER EL ID DEl PRODUCTO
  getListItemCarrito(id: any) {
    this.addCars.addProductCars(id);
  }
  //ME SUSCRIBO PARA GUARDAR LA LISTA DE PRODUCTOS QUE TENGO
  getItemCarrito() {
    this.apiServi.productCarrito.subscribe((res) => {
      //ME SUSCRIBO AL RXJS DEl SERVICIO
      this.productoItems = res;
      //this.totalPago(); //CALCULO EL TOTAL A PAGAR
      this.carritoTotal();
    });
  }
  //CALCULAR EL TOTAL DEl CARRITO CUANDO SE LE CAMBIE EL ITEMS
  carritoTotal() {
    this.totalAPagar = 0;
    this.productoItems.map((res: any) => {
      const subtotal = res.precio * res.item;
      this.totalAPagar = this.totalAPagar + subtotal;
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
    //ME SUSCRIBO AL NUEVO CAMBIO DEL TOTAL A PAGAR SEGUN CAMBIOS CREADOS EN DISTINTOS COMPONENTES
    this.apiServi.totalAPagar$.subscribe((res) => {
      this.totalAPagar = res;
    });
  }

  //ELIMINAR DE LA LISTA DEL CARRITO
  removeItemCarrito(id: any) {
    this.apiServi.eliminarItemsCarrito(id);
    this.carritoTotal(); //TOTAL DE PRODUCTOS
  }
  //IR AL CARRITO
  irCarrito() {
    this.router.navigateByUrl(
      `${UrlFront.CarritoList.carrito}/${UrlFront.CarritoList.carritoList}`
    );
  }
  irAPagar() {
/*     this.apiServi.eliminarTodo();
    localStorage.removeItem('carritoItems'); */
    this.router.navigateByUrl(
      `${UrlFront.Pagar.pagar}/${UrlFront.Pagar.processoPagar}`
    );
  }
}
