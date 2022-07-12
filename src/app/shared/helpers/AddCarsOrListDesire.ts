import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoUserLoginService } from '../components/carrito-list/services/carrito-user-login.service';
import { CarritoItemsService } from '../components/index/menu-index/menu/services/carrito-items.service';
import { ListaDeseosService } from '../components/shared-products/lista-deseos/services/lista-deseos.service';
import { UrlFront } from '../routes/RoutesFront';
@Injectable({
  providedIn: 'root',
})
export class AddCarsOrListDesire {
  detalle_carrito: any = [];
  constructor(
    private apiListDesire: ListaDeseosService,
    private apiServi: CarritoItemsService,
    private apiCarritoUser: CarritoUserLoginService,
    private router: Router
  ) {}

  addListDesire(products: any) {
    this.apiListDesire.addListaDeseos(products);
  }
  //AGREGAR AL PRODUCTO AL CARRITO
  addProductCars(id: any) {
    this.apiServi.getDataProducts(id).subscribe((res) => {
      this.apiServi.addProductCarrito(res); //GUARDO ESE PRODUCTO EN UN ARREGLO BEHAVIOR
    });
  }
  addProductDetails(product: any) {
    this.apiServi.addProductCarrito(product);
  }
  //HACER PUSH DEL DETALLE DEL CARRITO
  addDetalleCarrito(res: any) {
    this.detalle_carrito.push({
      id_detalle_articulo: res.id_detalle_articulo,
      cantidad: res.item,
    });
  }
  //HACER POST CUANDO YA SE VAYA A COMPRAR EN EL CARRITO
  postCarritoItems(id: any, variable: boolean) {
    const form = {
      id_usuario: id,
      detalle_carrito: this.detalle_carrito,
    };
    //POST CARRITO ITEMS
    this.apiCarritoUser.postCarritoItems(form).subscribe(
      (res) => {
        console.log(res);
        if (variable)
          this.router.navigateByUrl(
            `${UrlFront.Pagar.pagar}/${UrlFront.Pagar.processoPagar}`
          );
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
